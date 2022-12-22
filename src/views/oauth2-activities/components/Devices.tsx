import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { AiFillAppstore } from "react-icons/ai";
import { IoPhonePortraitOutline, IoLaptopOutline } from "react-icons/io5";
import { deviceMap } from "../utils/devices";

export const deviceIcon: { [key: string]: JSX.Element } = {
  iPhone: <IoPhonePortraitOutline />,
  Macintosh: <IoLaptopOutline />,
  macOS: <IoLaptopOutline />,
  Windows: <AiFillAppstore />,
  Android: <IoPhonePortraitOutline />,
};

const whichIcon = (k: string) => {
  switch (k) {
    case "iPhone": {
      return <IoPhonePortraitOutline />;
    }
    case "Macintosh": {
      return <IoLaptopOutline />;
    }
    case "macOS": {
      return <IoLaptopOutline />;
    }
    case "Windows": {
      return <AiFillAppstore />;
    }
    case "Android": {
      return <IoPhonePortraitOutline />;
    }
  }
};

interface DevicesProps {
  // accesses: ReducedAccess[]
  logs: ReducedLog[];
}

const categorize = (logs: ReducedLog[]) => {
  const resMap: {
    [key: string]: { ua: string; timestamp: number; ip: string };
  } = {};
  for (const l of logs) {
    const d = deviceMap(l.userAgent, l.userAgentPlatform);
    if (!resMap[d]) {
      resMap[d] = {
        ua: l.userAgent,
        timestamp: new Date(l.timestamp).getTime(),
        ip: l.ip,
      };
    } else {
      const compareDate = new Date(l.timestamp).getTime();
      if (resMap[d].timestamp < compareDate) {
        resMap[d].timestamp = compareDate;
        resMap[d].ip = l.ip;
      }
    }
  }
  return resMap;
};

export const Devices: FC<DevicesProps> = ({ logs }) => {
  const theme = useTheme();
  const catMap = categorize(logs);
  const { t } = useTranslation("activities")
  return (
    <Box my={2}>
      <Typography variant="h6">{t("section-device-header")}</Typography>
      <Typography variant="body2" mt={1}>
      {t("section-device-description")}
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          py: "40px",
        }}
      >
        <Stack spacing={6}>
          {Object.keys(catMap).map((k, index) => {
            return (
              <Box>
                <Grid container>
                  <Grid item xs={2}>
                    {" "}
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "22px",
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {whichIcon(k.replaceAll(`"`, ""))}
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography fontWeight={600}>
                      {k.replaceAll(`"`, "")}
                    </Typography>
                    <Typography variant="body2" fontSize={12}>
                      {t("section-device-each-device-label-1")}{" "}
                      <strong>
                        {new Date(catMap[k].timestamp).toString()}
                      </strong>
                    </Typography>
                    <Link
                      href={`https://who.is/whois-ip/ip-address/${catMap[k].ip}`}
                      fontSize={12}
                      sx={{
                        color: theme.palette.info.main,
                      }}
                    >
                      {t("section-device-each-device-ip-look-up")}
                    </Link>
                    <Box sx={{
                      my: 2,
                      padding: "14px",
                      borderRadius: "12px",
                      backgroundColor: theme.palette.secondary.main,
                    }}>
                      <Typography fontSize={12} variant="body2">{catMap[k].ua}</Typography></Box>
                  </Grid>
                </Grid>

                <Box>
                  <Typography></Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};
