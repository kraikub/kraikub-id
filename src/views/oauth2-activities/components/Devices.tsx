import { Box, Typography } from "@mui/material";

export const Devices = () => {
  return (
    <Box>
      <Typography variant="h6">Devices</Typography>
      <Typography variant="body2" mt={1}>
        All devices that you have used for signing in to apps on Kraikub and
        their sessions still active.
      </Typography>
    </Box>
  );
};
