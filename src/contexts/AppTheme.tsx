import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme } from "../styles/mui/kraikubid-dark";
import { lightTheme } from "../styles/mui/kraikubid-light";
import { lunarTheme } from "../styles/mui/kraikubid-lunar";
import { naturalTheme } from "../styles/mui/kraikubid-natural";

type AllowedTheme = "light" | "dark";

const allowedThemes = ["light", "dark"];

type AppThemeProviderProps = {
  children: any;
};

const themeSwitcher = (t: AllowedTheme): Theme => {
  if (t === "light") return lightTheme;
  else if (t === "dark") return darkTheme;
  else {
    // default theme is considered as "light"
    localStorage.setItem("app-theme", "light");
    return darkTheme;
  }
};

const ThemeContext = createContext({
  theme: "light",
  changeTheme: (t: AllowedTheme) => {},
});

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [theme, setTheme] = useState<AllowedTheme>();

  function changeTheme(themeName: AllowedTheme) {
    localStorage.setItem("app-theme", themeName);
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
          content={useBackgroundTheme(themeSwitcher(theme))}
        />
      </Head>
      <ThemeProvider theme={themeSwitcher(theme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);
