import { Stack, Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const PersonalEmail = () => {
  return (
    <ChoiceCard
      title="PERSONAL EMAIL"
      description={
        <Stack spacing={1}>
          <Typography>
            You have not verify your personal email yet.
          </Typography>
          <Typography variant="body2">
            Must not be @ku.th
          </Typography>
        </Stack>
      }
      choice={[
        {
          text: "Verify now",
        },
      ]}
    />
  );
};
