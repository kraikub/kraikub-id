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
import { AppBar } from "../../layouts/AppBar";

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
        <title>Sign in Activities (last 30 days)</title>
      </Head>
      <AppBar>
        <Box>
          <Typography variant="h5">กิจกรรมการเข้าสู่ระบบ</Typography>
          <Typography variant="body2" fontWeight={500} mt={2}>
            ของบัญชี {"นาย ณัฐชนน จันทรศัพท์"}
          </Typography>
          <Box
            sx={{
              my: 6,
            }}
          >
            {logs.map((l, index) => {
              return (
                <Accordion
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
                    <Typography sx={{
                        fontWeight: 500,
                        fontSize: 14,
                        color: theme.palette.text.secondary
                      }}>{l.timestamp}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </AppBar>
    </>
  );
};
