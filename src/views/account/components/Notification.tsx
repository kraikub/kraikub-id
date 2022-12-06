import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { IOSSwitch } from "../../../layouts/ui/input/IosSwitch";

interface EachNotificationGridProps {
  children?: ReactNode;
  description?: string;
}

const EachNotificationGrid: FC<EachNotificationGridProps> = (props) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        {props.children}
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <IOSSwitch />
      </Grid>
    </Grid>
  );
};

export const Notification = () => {
  return (
    <Box>
      <Typography variant="h6">Email notifications</Typography>
      <Stack my={5} spacing={2}>
        <EachNotificationGrid>
          <Typography>When succesfully sign in to an app</Typography>
          <Typography variant="body2" fontSize={12} mt={1}>
            Notifications will be sent only when an application which you have
            signed in has successfully claimed for your personal data access.
          </Typography>
        </EachNotificationGrid>
        <EachNotificationGrid>
          <Typography>News and updates from Kraikub</Typography>
        </EachNotificationGrid>
      </Stack>
    </Box>
  );
};
