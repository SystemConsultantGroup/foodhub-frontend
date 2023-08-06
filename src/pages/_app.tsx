import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";
import Layout from "components/layout/Layout";
import CustomError from "pages/_error";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {pageProps?.error ? (
          <CustomError statusCode={pageProps.error.statusCode} title={pageProps.error.title} />
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
