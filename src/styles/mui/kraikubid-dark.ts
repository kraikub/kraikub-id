import { createTheme } from "@mui/material";
import { kraikubBaseTheme } from "./base";

export const darkTheme = createTheme({
  ...kraikubBaseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#3bff93",
      contrastText: "#000000",
    },
    secondary: {
      main: "#181818",
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
      default: "#000000",
      paper: "#ffffff1b",
    },
    text: {
      primary: "#f7f7f7",
    },
    divider: "#292929",
  },
});
