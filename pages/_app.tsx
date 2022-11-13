import "../src/styles/css/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../src/contexts/AppTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
