import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Stack,
  Divider,
  Button,
  Container,
  Avatar,
} from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { PaperSection } from "../../../layouts/ui/section/PaperSection";

interface ActivitiesProps {
  accesses: ReducedAccess[];
}

interface KeyValueProps {
  title: string;
  value: string;
}

const KeyValue: FC<KeyValueProps> = (props) => {
  return (
    <Box>
      <Typography variant="body2" fontSize={12}>
        {props.title}
      </Typography>
      <Typography variant="body2" fontSize={12} mt={1}>
        <strong>{props.value}</strong>
      </Typography>
    </Box>
  );
};

export const Activities: FC<ActivitiesProps> = ({ accesses }) => {
  const theme = useTheme();
  const [whichActive, setWhichActive] = useState<number>();
  const { t } = useTranslation("activities");

  const handleChange =
    (which: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setWhichActive(newExpanded ? which : undefined);
    };
  return (
    <Box my={2}>
      <Typography variant="h6">{t("section-apps-header")}</Typography>
      <Typography variant="body2" mt={1}>
        {t("section-apps-description")}
      </Typography>
      <Container maxWidth="sm">
        <PaperSection
          sx={{
            my: 5,
            p: 0,
          }}
        >
          {accesses.map((l, index) => {
            const createdAt = new Date(l.createdAt);
            return (
              <Accordion
                elevation={0}
                disableGutters
                expanded={whichActive === index}
                onChange={handleChange(index)}
                sx={{
                  py: "4px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: theme.palette.divider,

                  // background:
                  //   whichActive === index
                  //     ? theme.palette.secondary.main
                  //     : "transparent",
                }}
              >
                <AccordionSummary
                  key={`oauth2-act-${index}`}
                  expandIcon={<IoIosArrowDown />}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        background:
                          "linear-gradient(155deg, rgba(0,114,154,1) 0%, rgba(0,162,119,1) 100%)",
                        height: "32px",
                        width: "32px",
                        fontSize: 18,
                        borderRadius: "6px",
                      }}
                    >
                      {l.application[0].appName[0]}
                    </Avatar>
                    <Typography fontWeight={500}>
                      {l.application[0].appName}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Box sx={{
                    backgroundColor: theme.palette.secondary.main,
                    p: 2,
                    borderRadius: "12px",
                  }}> */}
                  <Stack spacing={2}>
                    <KeyValue
                      title="Access given on"
                      value={`${createdAt.toLocaleString()}`}
                    />
                    <Box
                      sx={{
                        mt: "40px",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                      >
                        Remove access
                      </Button>
                    </Box>
                  </Stack>
                  {/* </Box> */}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </PaperSection>
      </Container>
    </Box>
  );
};
