import { NextPage } from "next";
import App from "@components/app";
import Header from "@components/header";
import MovieList from "@components/movie/movie-list";
import Form from "@components/movie/form";
import InfoBox from "@components/info-box";

const HomePage: NextPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <Form />
    <MovieList />
  </App>
);

export default HomePage;
