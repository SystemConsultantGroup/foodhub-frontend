import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import Router from "next/router";

interface CustomAppProps extends AppProps {
  Component: NextComponentType & { showNavbar?: boolean };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  //const showNavbar = Component.showNavbar ?? true;

  return (
    <ThemeProvider theme={theme}>
      <head></head>
    </ThemeProvider>
  );
}

export default MyApp;
