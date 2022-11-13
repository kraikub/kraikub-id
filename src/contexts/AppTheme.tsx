import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme } from "../styles/mui/kraikubid-dark";
import { lightTheme } from "../styles/mui/kraikubid-light";

type AllowedTheme = "light" | "dark";

const allowedThemes = ["light", "dark"];

type AppThemeProviderProps = {
  children: any;
};

const ThemeContext = createContext({
  theme: "dark",
  changeTheme: (t: AllowedTheme) => {},
});

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [theme, setTheme] = useState<AllowedTheme>();

  function changeTheme(t: AllowedTheme) {
    localStorage.setItem("app-theme", t);
    location.reload();
  }

  function useBackgroundTheme(t: Theme): string {
    return t.palette.background.default;
  }

  useEffect(() => {
    const t = localStorage.getItem("app-theme");
    if (t && allowedThemes.includes(t)) {
      setTheme(t as AllowedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  if (!theme) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      <Head>
        <meta
          name="theme-color"
          content={
            theme === "light"
              ? useBackgroundTheme(lightTheme)
              : useBackgroundTheme(darkTheme)
          }
        />
      </Head>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);
