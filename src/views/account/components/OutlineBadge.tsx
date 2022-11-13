import { Box, Paper, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";

interface OutlineBadgeProps {
  color?: string;
  textTh?: string;
  textEn?: string;
  icon?: ReactNode;
  iconSize?: string;
}

export const OutlineBadge: FC<OutlineBadgeProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        px: "10px",
        py: "6px",
      }}
    >
      {/* for icon */}
      <Box
        sx={{
          display: "flex",
          width: "100px",
          fontSize: props.iconSize,
        }}
      >
        {props.icon}
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {props.textTh}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {props.textEn}
        </Typography>
      </Box>
    </Paper>
  );
};
