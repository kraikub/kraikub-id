import { Box, Typography } from "@mui/material";

export const Analytic = () => {
  return (
    <Box>
      <Typography variant="body1" fontSize={12}>
        <strong>Your last 30 days sign in activities</strong>
      </Typography>
      <Box
        sx={{
          py: 5,
        }}
      ></Box>
    </Box>
  );
};
