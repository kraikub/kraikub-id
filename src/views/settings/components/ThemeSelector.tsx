import {
  Button,
  Checkbox,
  Paper,
  Stack,
  Theme,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useAppTheme } from "../../../contexts/AppTheme";
import { darkTheme } from "../../../styles/mui/kraikubid-dark";
import { lightTheme } from "../../../styles/mui/kraikubid-light";
import { lunarTheme } from "../../../styles/mui/kraikubid-lunar";
import { naturalTheme } from "../../../styles/mui/kraikubid-natural";

interface ThemePreviewProps {
  theme: Theme;
  label: string;
  value: "light" | "dark" | "lunar" | "natural";
}

const ThemePreview: FC<ThemePreviewProps> = ({ theme, label, value }) => {
  const { theme: current, changeTheme } = useAppTheme();
  const currentTheme = useTheme();

  return (
    <Stack alignItems="center" spacing={2}>
      <ThemeProvider theme={theme}>
        <Paper
          elevation={2}
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
        </Paper>
      </ThemeProvider>
      <Typography
        fontSize={12}
        fontWeight={600}
        sx={{
          textTransform: "uppercase",
        }}
      >
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

export const ThemeSelector = () => {
  return (
    <Paper>
      <Typography fontWeight={600}>Choose display theme</Typography>
      <Stack direction="row" gap={2} my={2} flexWrap="wrap">
        <ThemePreview theme={lightTheme} label="Light" value="light" />
        <ThemePreview theme={darkTheme} label="Dark" value="dark" />
        <ThemePreview theme={lunarTheme} label="Lunar" value="lunar" />
        <ThemePreview theme={naturalTheme} label="Natural" value="natural" />
      </Stack>
    </Paper>
  );
};
