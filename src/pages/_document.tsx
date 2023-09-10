import { PORTAL_ID } from "constant/portal";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id={PORTAL_ID} />
        <NextScript />
      </body>
    </Html>
  );
}
