import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00D861",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e8eaf1",
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
      default: "#f5f6f7",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
    },
    divider: "#e6e6e6",
  },
  shape: {
    borderRadius: 14,
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
      fontSize: 16,
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
          padding: "18px",
        },
      },
    },
  },
});
