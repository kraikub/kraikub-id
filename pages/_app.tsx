import "../src/styles/css/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../src/contexts/AppTheme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  );
}
