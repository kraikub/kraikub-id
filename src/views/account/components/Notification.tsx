import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../contexts/User";
import { settingService } from "../../../services/settings";
import { SwitchMenu } from "./SwitchMenu";

export const Notification = () => {
  const { user: u } = useUser();
  const { t } = useTranslation(["account"]);
  if (!u) {
    return null;
  }
  return (
    <Box>
      <Typography variant="h6">{t("Notification.heading")}</Typography>
      <Stack my={5} spacing={2}>
        <SwitchMenu
          initialState={u.settings.email.signin}
          onChange={settingService.changeSettings}
          settingKey="settings.email.signin"
          onError={() => {}}
        >
          <Typography>{t("Notification.when-sign-in")}</Typography>
          <Typography variant="body2" fontSize={12} mt={1}>
            {t("Notification.when-sign-in-description")}
          </Typography>
        </SwitchMenu>
        <SwitchMenu
          initialState={u.settings.email.news}
          onChange={settingService.changeSettings}
          settingKey="settings.email.news"
          onError={() => {}}
        >
          <Typography>{t("Notification.when-news")}</Typography>
        </SwitchMenu>
      </Stack>
    </Box>
  );
};
