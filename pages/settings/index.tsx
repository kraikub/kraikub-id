import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageAuthMiddleware } from "../../middlewares/auth.middleware";

export { SettingPage as default } from "../../src/views/settings";


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

  
  return {
    props: {
      ...(await serverSideTranslations(context.req.cookies.LANG || "th", ["settings", "appbar", "common"])),
    },
  };
};