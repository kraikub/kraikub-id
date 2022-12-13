import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../contexts/User";
import { settingService } from "../../../services/settings";
import { SwitchMenu } from "./SwitchMenu";

export const TwoFactor = () => {
  const { t } = useTranslation(["account"]);
  const { user } = useUser();
  if (!user) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h6">{t("TwoFactor.heading")}</Typography>
      <Stack my={5} spacing={2}>
        <SwitchMenu
          initialState={user.settings.tfa.enable}
          onChange={settingService.changeTfa}
          settingKey=""
          onError={() => alert("Error")}
        >
          <Typography>{t("TwoFactor.enable")}</Typography>
          <Typography variant="body2" fontSize={12} mt={1}>
            {t("TwoFactor.enable-description")}
          </Typography>
        </SwitchMenu>
      </Stack>
    </Box>
  );
};
