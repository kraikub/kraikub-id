import { createTheme } from "@mui/material";
export const kraikubBaseTheme = createTheme({
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: `'Poppins','Kanit', sans-serif`,
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
      opacity: 0.7
    },
    button: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  components: {
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
