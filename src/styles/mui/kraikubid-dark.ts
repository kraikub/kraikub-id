import { createTheme } from "@mui/material";
import kraikubBaseTheme from "./base";

export const darkTheme = createTheme({
  ...kraikubBaseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#3bff93",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff1a",
      contrastText: "#ffffff",
    },
    info: {
      main: "#307cff",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ff3c2e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#18191a",
      paper: "#ffffff01",
    },
    text: {
      primary: "#f7f7f7",
    },
    divider: "#ffffff1a",
  },
});
