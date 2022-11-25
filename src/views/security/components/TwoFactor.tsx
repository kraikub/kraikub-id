import { Stack, Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const TwoFactor = () => {
  return (
    <ChoiceCard
      title="TWO FACTOR AUTHENTICATION (2FA)"
      description={
        <Stack spacing={1}>
          <Typography>
            Enable 2FA to mostly secure your account from any malicious logins.
          </Typography>
          <Typography variant="body2">
            We will send a sign in event details to your
            <strong> PERSONAL EMAIL</strong> everytime your account is logged in
            to any apps under Kraikub services.
          </Typography>
        </Stack>
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
