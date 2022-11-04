import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  useTheme,
  ButtonBase,
} from "@mui/material";
import { FC, ReactNode } from "react";

interface ChoiceCardProps {
  title: string;
  description: ReactNode | string;
  choice?: Choice[];
}

export const ChoiceCard: FC<ChoiceCardProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper sx={{
      overflow: "hidden"
    }}>
      <Box
        sx={{
          p: "18px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: 16,
            mb: 2,
          }}
        >
          {props.title}
        </Typography>
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
              >
                <Box sx={{
                  borderStyle: "solid",
                  borderWidth: "1px 0 0 0",
                  borderColor: theme.palette.divider,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  minHeight: "44px",
                }}>
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
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};
