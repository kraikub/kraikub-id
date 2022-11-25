import { Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const UniversityEmail = () => {
  return (
    <ChoiceCard
      title="UNIVERSITY EMAIL"
      description={
        <Typography>You have not verify your @ku.th email yet. </Typography>
      }
      choice={[
        {
          text: "Verify now",
        },
      ]}
    />
  );
};
