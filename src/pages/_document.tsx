import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import loadingStyles from "../utils/loading-styles";

function Document() {
  return (
    <Html>
      <Head>
        <style>{loadingStyles}</style>
        <meta name="description" content="Madeleine Milasas - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div id="loader" aria-label="Loading">
          <div id="spinnerContainer">
            <div id="spinner" />
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
