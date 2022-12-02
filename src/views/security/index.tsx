import { Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../layouts/AppBar";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { PersonalEmail } from "./components/PersonalEmail";
import { TwoFactor } from "./components/TwoFactor";
import { UniversityEmail } from "./components/UniversityEmail";

export const SecurityPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Security</title>
      </Head>
      <AppBar>
        <PageHeading>Security</PageHeading>
        <Stack spacing={5} my={4}>
          <UniversityEmail />
          <PersonalEmail />
          <TwoFactor />
        </Stack>
      </AppBar>
    </>
  );
};
