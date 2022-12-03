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
import { PaperSection } from "../../layouts/ui/section/PaperSection";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";

const logs = [
  {
    appName: "KUClap",
    clientId: "",
    scope: "2",
    timestamp: "1234",
  },
  {
    appName: "Kraikub",
    clientId: "",
    scope: "2",
    timestamp: "5678",
  },
  {
    appName: "Kraikub",
    clientId: "",
    scope: "2",
    timestamp: "3578",
  },
];

export const OAuthActivities: NextPage = () => {
  const theme = useTheme();
  const [whichActive, setWhichActive] = useState<number>();

  const handleChange =
    (which: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setWhichActive(newExpanded ? which : undefined);
    };

  return (
    <>
      <Head>
        <title>Account Activities</title>
      </Head>
      <AppBar>
        <Box>
          <PageHeading>Sign in activities</PageHeading>
          <MobileSaveSection>
            Sign in activities of <strong>{"MR. NUTCHANON CHANTRASUP"}</strong>{" "}
            account.
          </MobileSaveSection>
          <Box
            sx={{
              my: 6,
            }}
          >
            <PaperSection sx={{
              p: 0,
            }}>
              {logs.map((l, index) => {
                return (
                  <Accordion
                    elevation={0}
                    disableGutters
                    expanded={whichActive === index}
                    onChange={handleChange(index)}
                    sx={{
                      py: "4px",
                    }}
                  >
                    <AccordionSummary
                      key={`oauth2-act-${index}`}
                      expandIcon={<IoIosArrowDown />}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 14,
                        }}
                      >
                        {l.appName}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {l.timestamp}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </PaperSection>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};
