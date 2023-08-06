import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";
import Layout from "components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
