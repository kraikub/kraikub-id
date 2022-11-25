import {
  Box,
  Button,
  Card,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

interface UseSuggestionEmailProps {
  suggestedEmail: string;
}

export const UseSuggestionEmail: FC<UseSuggestionEmailProps> = ({
  suggestedEmail,
}) => {
  const theme = useTheme();

  const bodyText = (
    <>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        Your personal email was not set. Do you want to use
        <Typography
          component="span"
          color={theme.palette.info.main}
          fontSize="inherit"
          fontWeight={600}
          sx={{
            display: "inline",
          }}
        >
          {" "}
          {suggestedEmail}{" "}
        </Typography>
        as your personal email?
      </Typography>
    </>
  );

  const choice = [
    {
      text: "No, I'll choose by own.",
    },
    {
      text: "Yes",
    },
  ]

  return <ChoiceCard title="PERSONAL EMAIL" description={bodyText} choice={choice}/>;
};
