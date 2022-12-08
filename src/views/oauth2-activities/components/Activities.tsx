import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PaperSection } from "../../../layouts/ui/section/PaperSection";

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

export const Activities = () => {
  const theme = useTheme();
  const [whichActive, setWhichActive] = useState<number>();

  const handleChange =
    (which: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setWhichActive(newExpanded ? which : undefined);
    };
  return (
    <Box>
      <Typography variant="h6">Apps and sessions</Typography>
      <Typography variant="body2" mt={1}>
        A list of your active sessions on Kraikub.
      </Typography>
      <PaperSection
        sx={{
          my: 5,
          p: 0,
        }}
      >
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
  );
};
