import { Box, Stack, Typography } from "@mui/material";
import { SwitchMenu } from "./SwitchMenu";

export const Notification = () => {
  return (
    <Box>
      <Typography variant="h6">Email notifications</Typography>
      <Stack my={5} spacing={2}>
        <SwitchMenu>
          <Typography>When succesfully sign in to an app</Typography>
          <Typography variant="body2" fontSize={12} mt={1}>
            Notifications will be sent only when an application which you have
            signed in has successfully claimed for your personal data access.
          </Typography>
        </SwitchMenu>
        <SwitchMenu>
          <Typography>News and updates from Kraikub</Typography>
        </SwitchMenu>
      </Stack>
    </Box>
  );
};
