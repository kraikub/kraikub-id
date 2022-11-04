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

interface Choice {
  onClick?: () => void;
  text: string;
  href?: string;
}

interface ChoiceCardProps {
  title: string;
  description: ReactNode | string;
  choice?: Choice[];
}

export const ChoiceCard: FC<ChoiceCardProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper>
      <Box
        sx={{
          p: "14px",
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
          ยืนยันอีเมลสำรอง
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
          pt: "14px",
        }}
      >
        {props.choice?.map((c, index) => {
          return (
            <Box key={`${props.title}-${index}`}>
              <Divider
                sx={{
                  ml: "14px",
                }}
              />
              <ButtonBase sx={{
                px: "14px",
                minHeight: "40px",
                width: "100%",
                justifyContent: "start",
                "&:hover": {
                  backgroundColor: theme.palette.divider,
                }
              }}>
                <Typography sx={{
                  fontSize: 14,
                  color: theme.palette.info.main
                }}>{c.text}</Typography>
              </ButtonBase>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};
