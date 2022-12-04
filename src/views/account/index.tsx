import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../layouts/appbar/AppBar";
import { Menu } from "../../layouts/ui/menu/Menu";
import { MobileSaveSection } from "../../layouts/ui/section/MobileSaveSection";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
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
        <PageHeading>Account</PageHeading>
        <ProfilePic />
        <Stack
          spacing={5}
          sx={{
            my: 4,
          }}
        >
          {/* <General /> */}
          <Menu
            text="Verify your @ku.th email"
            mark="important"
            href="/verify/university-email"
          />
          <UseSuggestionEmail suggestedEmail="beamuonly@gmail.com" />
          {/* <Education /> */}
          <AppActivities />
        </Stack>
      </AppBar>
    </>
  );
};
