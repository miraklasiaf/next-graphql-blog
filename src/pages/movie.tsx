import { NextPage } from "next";
import App from "@components/app";
import MovieList from "@components/movie/movie-list";

const MoviePage: NextPage = () => (
  <App>
    {/* <Form /> */}
    <MovieList />
  </App>
);

export default MoviePage;
