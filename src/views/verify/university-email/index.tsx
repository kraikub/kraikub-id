import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../../layouts/appbar/AppBar";
import { MobileSaveSection } from "../../../layouts/ui/section/MobileSaveSection";
import { EmailForm } from "./components/EmailForm";

export const VerifyUniversityEmail: NextPage = () => {
  return (
    <>
      <Head>
        <title>Verify your Kasetsart University Email</title>
      </Head>
      <AppBar>
        <MobileSaveSection>
          <Box>
            <Typography variant="h5" className="letter-spacing-1">
              Verify your @ku.th email
            </Typography>
          </Box>
          <Box
            sx={{
              my: 2,
            }}
          >
            <EmailForm />
          </Box>
        </MobileSaveSection>
      </AppBar>
    </>
  );
};
