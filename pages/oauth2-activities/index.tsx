import { GetServerSideProps } from "next";
import { UserModel } from "../../data/models/user";
import { PageAuthMiddleware } from "../../middlewares/auth.middleware";
import { serializeEach } from "../../utils/json";

export { OAuthActivities as default } from "../../src/views/oauth2-activities";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid } = PageAuthMiddleware(context.req.cookies.access);

  if (!uid) {
    return {
      redirect: {
        destination: "/bring-to-signin",
      },
      props: {
        accesses: [],
        logs: [],
      },
    };
  }

  const pipeline = [
    {
      $match: {
        uid: "7aa9d883290077be4999f36252a0c61fbd603acf3a51adc4f724544525d503e2",
      },
    },
    {
      $lookup: {
        from: "logs",
        localField: "uid",
        foreignField: "uid",
        as: "logs",
      },
    },
    {
      $lookup: {
        from: "accesses",
        localField: "uid",
        foreignField: "uid",
        as: "accesses",
      },
    },
    {
      $unwind: {
        path: "$accesses",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "applications",
        localField: "accesses.clientId",
        foreignField: "clientId",
        as: "accesses.application",
      },
    },
    {
      $unwind: {
        path: "$accesses.application",
      },
    },
    {
      $group: {
        _id: "$_id",
        logs: {
          $push: "$logs",
        },
        accesses: {
          $push: "$accesses",
        },
      },
    },
    {
      $set: {
        logs: {
          $first: "$logs",
        },
      },
    },
    {
      $project: {
        accesses: {
          _id: 0,
          __v: 0,
          application: {
            clientId: 0,
            secret: 0,
            redirect: 0,
            ownerId: 0,
          },
        },
        logs: {
          uid: 0,
        },
      },
    },
  ];

  const res = await UserModel.aggregate(pipeline);
  if (!res.length) {
    return {
      redirect: {
        destination: "/bring-to-signin",
      },
      props: {
        accesses: [],
        logs: [],
      },
    };
  }

  return {
    props: {
      accesses: serializeEach(res[0].accesses),
      logs: serializeEach(res[0].logs),
    },
  };
};
