import { GetServerSideProps } from "next";

export { AccountPage as default } from "../../src/views/account";

export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: {
      dict: {}
    }
  }
}