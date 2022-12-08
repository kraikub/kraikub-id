import { Box, Typography } from "@mui/material";

export const Analytic = () => {
  return (
    <Box>
      <Typography variant="body1" fontSize={12}>
        <strong>Your sign in on last 30 days</strong>
      </Typography>
      <Box
        sx={{
          py: 5,
        }}
      ></Box>
    </Box>
  );
};
