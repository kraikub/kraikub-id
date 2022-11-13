import {
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useAppTheme } from "../../../contexts/AppTheme";
import { darkTheme } from "../../../styles/mui/kraikubid-dark";
import { lightTheme } from "../../../styles/mui/kraikubid-light";

interface ThemePreviewProps {
  theme: Theme;
  label: string;
  value: "light" | "dark";
}

const ThemePreview: FC<ThemePreviewProps> = ({ theme, label, value }) => {
  const { theme: current, changeTheme } = useAppTheme();

  return (
    <Stack alignItems="center" spacing={2}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "180px",
            aspectRatio: "1/1",
            borderRadius: "18px",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            p: "10px",
          }}
        >
          <Paper
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              py: 1,
            }}
          >
            <Typography color="inherit">Aa</Typography>
          </Paper>

          <Stack direction="row" spacing="4px" my={2}>
            <Button color="primary" variant="contained"></Button>
            <Button color="secondary" variant="contained"></Button>
          </Stack>
          <Box
            sx={{
              backgroundColor: theme.palette.info.main,
              height: "20px",
              borderRadius: "8px",
            }}
          ></Box>
        </Box>
      </ThemeProvider>
      <Typography fontSize={14} fontWeight={500}>
        {label}
      </Typography>
      <Checkbox
        checked={current === value}
        color="info"
        onChange={(_, c) => {
          if (!c) return;
          changeTheme(value);
        }}
      />
    </Stack>
  );
};

const gridItemStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const ThemeSelector = () => {
  return (
    <Paper>
      <Typography>เลือกโหมดการแสดงผล</Typography>
      <Stack direction="row" spacing={2} my={2}>
        <ThemePreview theme={lightTheme} label="Light" value="light" />
        <ThemePreview theme={darkTheme} label="Dark" value="dark" />
      </Stack>
    </Paper>
  );
};
