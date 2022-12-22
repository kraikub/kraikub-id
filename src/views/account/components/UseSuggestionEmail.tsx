import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { t } from "i18next";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../../layouts/ui/input/Input";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

interface UseSuggestionEmailProps {
  suggestedEmail: string;
}

export const UseSuggestionEmail: FC<UseSuggestionEmailProps> = ({
  suggestedEmail,
}) => {
  const { t } = useTranslation(["account", "common"])
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <TextField color="info" size="small"  label={t("common:Email")}/>
      {/* <Input inputProps={{ placeholder: t("common.Email") || "" }} /> */}
      <Typography variant="body2" fontSize={12} fontWeight={500}>
        {t("UseSuggestionEmail.email-description")}
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
          <strong>{t('UseSuggestionEmail.email-suggestion')}: {suggestedEmail}</strong>
        </Typography>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" size="small" color="secondary">
          {t('UseSuggestionEmail.verify-email')}
        </Button>
      </Stack>
    </Stack>
  );
};
