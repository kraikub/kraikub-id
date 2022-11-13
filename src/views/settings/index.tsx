import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { AppBar } from "../../layouts/AppBar";
import { ThemeSelector } from "./components/ThemeSelector";

export const SettingPage: FC = () => {
  return (
    <>
      <AppBar>
        <Box>
          <Typography variant="h5">ตั้งค่า</Typography>
        </Box>
        <Stack spacing={2} my={4}>
          <ThemeSelector />
        </Stack>
      </AppBar>
    </>
  );
};
