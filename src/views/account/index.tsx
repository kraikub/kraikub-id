import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../layouts/AppBar";
import { Menu } from "../../layouts/ui/menu/Menu";
import { AppActivities } from "./components/AppActivities";
import { Education } from "./components/Education";
import { General } from "./components/General";
import { ProfilePic } from "./components/ProfilePic";
import { Suggestions } from "./components/Suggestions";
import { UseSuggestionEmail } from "./components/UseSuggestionEmail";

export const AccountPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Kraikub ID</title>
      </Head>
      <AppBar>
        <Typography variant="h6">บัญชีของคุณ</Typography>
        <Suggestions />
        <ProfilePic />
        <Stack spacing={2} sx={{
          my: 4
        }}>
          <General />
          <Menu text="ยืนยันอีเมลมหาวิทยาลัย" mark="important"/>
          <UseSuggestionEmail suggestedEmail="beamuonly@gmail.com" />
          <Education />
          <AppActivities />
        </Stack>
      </AppBar>
    </>
  );
};
