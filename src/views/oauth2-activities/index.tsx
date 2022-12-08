import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AppBar } from "../../layouts/appbar/AppBar";
import { MobileSaveSection } from "../../layouts/ui/section/MobileSaveSection";
import { MultiSection } from "../../layouts/ui/section/MultiSection";
import { PaperSection } from "../../layouts/ui/section/PaperSection";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { Activities } from "./components/Activities";
import { Analytic } from "./components/Analytic";
import { Devices } from "./components/Devices";

export const OAuthActivities: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Account Activities</title>
      </Head>
      <AppBar>
        <Box>
          <MultiSection>
            <Box>
              <PageHeading>Sign in activities</PageHeading>
              <Typography>
                {" "}
                Sign in activities of{" "}
                <strong>{"MR. NUTCHANON CHANTRASUP"}</strong> account.
              </Typography>
            </Box>
            <Analytic />
            <Devices />
            <Activities />
          </MultiSection>
        </Box>
      </AppBar>
    </>
  );
};
