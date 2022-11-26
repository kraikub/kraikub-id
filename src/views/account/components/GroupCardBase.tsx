import { Box, Divider, Paper, Typography } from "@mui/material";
import { FC } from "react";

interface GroupCardBaseProps {
  children?: any;
  title: string;
}

export const GroupCardBase: FC<GroupCardBaseProps> = ({ children, title }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 12,
          mb: 2,
          pl: "18px",
          textTransform: "uppercase"
        }}
      >
        {title}
      </Typography>
      <Paper
        sx={{
          px: "18px",
        }}
      >
          {children}
      </Paper>
    </Box>
  );
};
