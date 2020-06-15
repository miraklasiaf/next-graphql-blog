import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "@lib/apolloClient";
import Nprogress from "@components/nprogress";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
      <Nprogress />
    </ApolloProvider>
  );
}

export default App;
