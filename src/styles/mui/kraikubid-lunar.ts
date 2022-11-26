import { createTheme } from "@mui/material";

export const lunarTheme = createTheme({
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
  typography: {
    fontFamily: `'Inter','Kanit', sans-serif`,
    fontSize: 16,
    h1: {
      fontWeight: 600,
      letterSpacing: "-2px",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-2px",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-2px",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-1px",
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,

      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      color: "#696969",
    },
    button: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(14,20,36)",
          backgroundImage: `linear-gradient(172deg, rgba(14,20,36,1) 0%, rgba(37,11,57,1) 100%)`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: {
          fontSize: 14,
        },
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
          backdropFilter: "blur(14px)",
        },
      },
    },
  },
});
