import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { Input } from "../../../layouts/ui/input/Input";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

interface UseSuggestionEmailProps {
  suggestedEmail: string;
}

export const UseSuggestionEmail: FC<UseSuggestionEmailProps> = ({
  suggestedEmail,
}) => {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <Input inputProps={{ placeholder: "Email" }} />
      <Typography variant="body2" fontSize={12} fontWeight={500}>
        Email will be used for enabling Two Factor Authentication (2FA)
        features, and receive notifications from Kraikub. We recommend you not
        to use @ku.th email for safety reasons.
      </Typography>
        <Typography
          variant="body2"
          fontSize={12}
          color={theme.palette.info.main}
          sx={{
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            }
          }}
        >
          <strong>Email suggestion: {suggestedEmail}</strong>
        </Typography>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" size="small" color="secondary">
          Verify my email
        </Button>
      </Stack>
    </Stack>
  );
};
