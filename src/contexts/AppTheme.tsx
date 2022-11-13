import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { darkTheme } from "../styles/mui/kraikubid-dark";
import { lightTheme } from "../styles/mui/kraikubid-light";

type AllowedTheme = "light" | "dark";

type AppThemeProviderProps = {
  children: any;
};

const ThemeContext = createContext({
  theme: "dark",
  changeTheme: (t: AllowedTheme) => {},
});

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [theme, setTheme] = useState<AllowedTheme>("dark");

  function changeTheme(t: AllowedTheme) {
    setTheme(t);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
      <CssBaseline />
      {children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext)