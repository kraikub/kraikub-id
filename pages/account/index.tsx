import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { aggregations } from "../../data/aggregations";
import { UserModel } from "../../data/models/user";
import { mongodb } from "../../data/mongo";
import { PageAuthMiddleware } from "../../middlewares/auth.middleware";
import { serialize } from "../../utils/json";

export { AccountPage as default } from "../../src/views/account";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid } = PageAuthMiddleware(context.req.cookies.access);
  await mongodb.connect();
  if (!uid) {
    return {
      props: {
        ...(await serverSideTranslations(context.req.cookies.LANG || "en", ["account", "appbar", "common"])),
        u: null,
      },
    };
  }
  const u = await UserModel.aggregate([
    ...aggregations.private.user(uid),
    ...aggregations.private.student(),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(context.req.cookies.LANG || "th", ["account", "appbar", "common"])),
      u: u.length ? serialize(u[0]) : null,
    },
  };
};
