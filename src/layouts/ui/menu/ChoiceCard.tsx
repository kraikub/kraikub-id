import {
  Paper,
  Box,
  Typography,
  useTheme,
  ButtonBase,
  Button,
  Stack,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { MuiPaperSx } from "../../../styles/mui/custom-mui-sx";
import { LinkWrap } from "../link/LinkWrap";
import { MobileSaveSection } from "../section/MobileSaveSection";

interface ChoiceCardProps {
  title: string;
  description: ReactNode | string;
  choice?: Choice[];
}


export const ChoiceCard: FC<ChoiceCardProps> = (props) => {
  const theme = useTheme();
  return (
    <Box>
      <MobileSaveSection>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 12,
            mb: 2,
            // pl: "18px",
          }}
          color={theme.palette.text.secondary}
          textTransform="uppercase"
        >
          {props.title}
        </Typography>
      </MobileSaveSection>
      <Paper
        sx={{
          overflow: "hidden",
          padding: 0,
          ...MuiPaperSx.disableBorderRadiusOnMobile,
        }}
      >
        <Box
          sx={{
            p: "18px",
            pb: props.choice?.length ? "0" : "18px",
          }}
        >
          {typeof props.description === "string" ? (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              {props.description}
            </Typography>
          ) : (
            props.description
          )}
        </Box>
        <Stack
          mt={6}
          spacing={1}
          sx={{
            p: "18px",
          }}
        >
          {props.choice?.map((c, index) => {
            return (
              <Box key={`${props.title}-${index}`}>
                <LinkWrap href={c.href}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      textTransform: "none",
                      color: theme.palette.text.primary,
                    }}
                    size="large"
                    onClick={c.onClick}
                  >
                    {c.text}
                  </Button>
                </LinkWrap>
              </Box>
            );
          })}
        </Stack>
      </Paper>
    </Box>
  );
};
