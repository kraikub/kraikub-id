import { createTheme } from "@mui/material";
import kraikubBaseTheme from "./base";

export const lunarTheme = createTheme({
  ...kraikubBaseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#ffd152",
      contrastText: "#000000",
    },
    secondary: {
      main: "#e8eaf1",
      contrastText: "#000000",
    },
    info: {
      main: "#82deff",
      contrastText: "#ffffff",
    },
    success: {
      main: "#82ffcb",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ff3c2e",
      contrastText: "#ffffff",
    },
    background: {
      default: "rgb(14,20,36)",
      paper: "#ffffff10",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "#e6e6e620",
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    ...kraikubBaseTheme.components,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(14,20,36)",
          backgroundImage: `linear-gradient(172deg, rgba(14,20,36,1) 0%, rgba(37,11,57,1) 100%)`,
        },
      },
    },
  },
});
