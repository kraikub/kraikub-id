import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
        uid: uid,
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

  let res = await UserModel.aggregate(pipeline);

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

  let data = res[0]
  data.accesses = data.accesses.filter((e: any) => {
    return e.accessId;
  })

  return {
    props: {
      ...(await serverSideTranslations(context.req.cookies.LANG || "th", ["activities", "appbar", "common"])),
      accesses: serializeEach(res[0].accesses),
      logs: serializeEach(res[0].logs),
    },
  };
};
