import { Box, Stack, Typography } from "@mui/material";
import { SwitchMenu } from "./SwitchMenu";

export const TwoFactor = () => {
  return (
    <Box>
      <Typography variant="h6">Two-factor authentication (2FA)</Typography>
      <Stack my={5} spacing={2}>
        <SwitchMenu>
          <Typography>Enable two-factor authentication</Typography>
          <Typography variant="body2" fontSize={12} mt={1}>
            An 6 digits code will be sent to your email inbox everytime you try
            to sign in to the app. We strongly recommend you to enable this feature.
          </Typography>
        </SwitchMenu>
      </Stack>
    </Box>
  );
};
