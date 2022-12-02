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
      main: "#edeff5",
      dark: "#dfe1e8",
      contrastText: "#000000",
    },
    info: {
      main: "#005EEB",
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
      primary: "#1a1a1a",
    },
    divider: "#e6e6e6",
  },
});
