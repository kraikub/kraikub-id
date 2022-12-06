import { Box, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../layouts/appbar/AppBar";
import { MultiSection } from "../../layouts/ui/section/MultiSection";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";
import { UseSuggestionEmail } from "./components/UseSuggestionEmail";

export const AccountPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <AppBar>
        <MultiSection>
          <Box>
            <PageHeading>Your account</PageHeading>
            <Typography>These describe your account on Kraikub.</Typography>
          </Box>
          <Container maxWidth="sm">
            <Profile />
          </Container>
          <Box>
            <Notification />
          </Box>
        </MultiSection>
      </AppBar>
    </>
  );
};
