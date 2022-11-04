import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3bff93",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff10",
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
      paper: "#141414",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "#292929",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: `'Inter','Kanit', sans-serif`,
    fontSize: 16,
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
      fontSize: 14,
      color: "#696969",
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});
