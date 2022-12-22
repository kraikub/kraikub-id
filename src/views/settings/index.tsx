import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppBar } from "../../layouts/appbar/AppBar";
import { MultiSection } from "../../layouts/ui/section/MultiSection";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { ThemeSelector } from "./components/ThemeSelector";

export const SettingPage: FC = () => {
  const { t } = useTranslation("settings")
  return (
    <>
      <AppBar>
        <MultiSection>
          <PageHeading>{t("page-header")}</PageHeading>
          <ThemeSelector />
        </MultiSection>
      </AppBar>
    </>
  );
};
