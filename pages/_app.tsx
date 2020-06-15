import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Nprogress from "@component/nprogress";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
      <Nprogress />
    </>
  );
}

export default App;
