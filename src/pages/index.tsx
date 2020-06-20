import { NextPage } from "next";
import { initializeApollo } from "@lib/apolloClient";
import App from "@components/app";
import Header from "@components/header";
import MovieList from "@components/movie/movie-list";
import Form from "@components/movie/form";
import InfoBox from "@components/info-box";
import { GET_MOVIES } from "@graphql/movie";

const HomePage: NextPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <Form />
    <MovieList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_MOVIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}

export default HomePage;
