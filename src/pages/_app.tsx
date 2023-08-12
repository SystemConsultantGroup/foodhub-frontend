import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";
import Layout from "components/layout/Layout";
import CustomError from "pages/_error";
import { NextComponentType } from "next";

interface CustomAppProps extends AppProps {
  Component: NextComponentType & { showHero?: boolean };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const { showHero } = Component;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout showHero={showHero}>
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
