import {
  Paper,
  Box,
  Typography,
  useTheme,
  ButtonBase,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { LinkWrap } from "../link/LinkWrap";

interface ChoiceCardProps {
  title: string;
  description: ReactNode | string;
  choice?: Choice[];
}

export const ChoiceCard: FC<ChoiceCardProps> = (props) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 12,
          mb: 2,
          pl: "18px"
        }}
      >
        {props.title}
      </Typography>
      <Paper
        sx={{
          overflow: "hidden",
          padding: 0,
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
        <Box
          sx={{
            pt: "18px",
          }}
        >
          {props.choice?.map((c, index) => {
            return (
              <Box key={`${props.title}-${index}`}>
                <LinkWrap href={c.href}>
                  <ButtonBase
                    sx={{
                      py: 0,
                      pl: "18px",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: theme.palette.divider,
                      },
                      display: "block",
                    }}
                    onClick={c.onClick}
                  >
                    <Box
                      sx={{
                        borderStyle: "solid",
                        borderWidth: "1px 0 0 0",
                        borderColor: theme.palette.divider,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        minHeight: "44px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 16,
                          color: theme.palette.info.main,
                        }}
                      >
                        {c.text}
                      </Typography>
                    </Box>
                  </ButtonBase>
                </LinkWrap>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};
