import { createTheme } from "@mui/material";
import kraikubBaseTheme from "./base";

export const lightTheme = createTheme({
  ...kraikubBaseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#00D861",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#63676e14",
      dark: "#63676e22",
      contrastText: "#000000",
    },
    info: {
      main: "#0f6ff5",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ff3c2e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#262626",
    },
    divider: "#dee0e3",
  },
});
