import { Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../layouts/AppBar";
import { Suggestions } from "./components/Suggestions";

export const AccountPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Kraikub ID</title>
      </Head>
      <AppBar>
        <Typography variant="h6">บัญชีของคุณ</Typography>
        <Suggestions />
      </AppBar>
    </>
  );
};
