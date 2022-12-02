import { createTheme } from "@mui/material";
const kraikubBaseTheme = createTheme({
  shape: {
    borderRadius: 12,
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
  shadows: [
    "none", 
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
    "0 2px 5px #00000010",
  ],
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: {
          fontSize: 14,
          height: "46px"
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
        elevation: 1,
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

export default kraikubBaseTheme