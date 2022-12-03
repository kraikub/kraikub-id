import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { AppBar } from "../../layouts/appbar/AppBar";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { ThemeSelector } from "./components/ThemeSelector";

export const SettingPage: FC = () => {
  return (
    <>
      <AppBar>
        <PageHeading>Settings</PageHeading>
        <Stack spacing={2} my={4}>
          <ThemeSelector />
        </Stack>
      </AppBar>
    </>
  );
};
