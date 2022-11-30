import { Box, Grid, Stack, Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const TwoFactor = () => {
  return (
    <ChoiceCard
      title="TWO FACTOR AUTHENTICATION (2FA)"
      description={
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Stack spacing={3} mt={4}>
              <Typography variant="h5">
                Enable 2FA, secure your account.
              </Typography>
              <Typography variant="body2">
                We will send a sign in event details to your
                <strong> PERSONAL EMAIL</strong> everytime your account is
                logged in to any apps under Kraikub services.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign="center" sx={{
              pt: "60px"
            }}>
              <img src="/resources/lock.png" width="250px" />
            </Box>
          </Grid>
        </Grid>
      }
      choice={[
        {
          text: "Enable 2FA",
          onClick: () => {
            alert("Please verify your personal email before enabling 2FA.");
          },
        },
      ]}
    />
  );
};
