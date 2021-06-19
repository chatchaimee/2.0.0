import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { Layout } from "components";
import { GlobalStyle, theme } from "styles";

const MyApp = (props: AppProps): JSX.Element => {
  const router = useRouter();
  const { Component, pageProps } = props;
  const title = "Chatchai Meesuksabai";

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="TH" />
        <meta name="google" content="notranslate" />
        <meta name="author" content="jayyzdayo" />
        {router?.pathname !== "/noscript" && (
          <noscript>
            <meta httpEquiv="refresh" content="0; URL=/noscript" />
          </noscript>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default MyApp;
