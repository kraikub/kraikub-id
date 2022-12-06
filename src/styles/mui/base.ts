import { createTheme } from "@mui/material";
const kraikubBaseTheme = createTheme({
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    fontSize: 16,
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 16,
      opacity: 0.7,
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shadows: [
    "none",
    "0 3px 3px #00000018",
    "0 3px 4px #00000028",
    "0 3px 5px #00000038",
    "0 3px 6px #00000048",
    "0 3px 7px #00000058",
    "0 3px 8px #00000068",
    "0 3px 9px #00000072",
    "0 3px 10px #00000076",
    "0 3px 12px #00000080",
    "0 3px 14px #00000084",
    "0 3px 16px #00000088",
    "0 3px 18px #00000090",
    "0 3px 20px #00000092",
    "0 3px 22px #00000094",
    "0 3px 24px #00000096",
    "0 3px 26px #00000098",
    "0 3px 28px #000000a0",
    "0 3px 33px #000000a1",
    "0 3px 36px #000000a2",
    "0 3px 39px #000000a3",
    "0 3px 44px #000000a4",
    "0 3px 48px #000000a5",
    "0 3px 56px #000000a6",
    "0 3px 64px #000000a7",
  ],
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        sizeLarge: {
          fontSize: 14,
          height: "46px",
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

export default kraikubBaseTheme;
