import { createTheme } from "@mui/material";
import { kraikubBaseTheme } from "./base";

export const naturalTheme = createTheme({
  ...kraikubBaseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#82ffc7",
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
      default: "rgb(0,69,93)",
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
          backgroundColor: "rgb(0,69,93)",
          backgroundImage: `linear-gradient(155deg, rgba(0,69,93,1) 0%, rgba(0,85,63,1) 100%)`,
        },
      },
    },
  },
});
