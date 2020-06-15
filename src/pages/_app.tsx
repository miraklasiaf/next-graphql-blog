import * as React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "@lib/apolloClient";
import Nprogress from "@components/nprogress";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <Nprogress />
    </ApolloProvider>
  );
}

export default App;
