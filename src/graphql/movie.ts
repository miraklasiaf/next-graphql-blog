import gql from "graphql-tag";

export const GET_ALL_MOVIE = gql`
  query getMovies {
    movies {
      id
      title
      minutes
    }
  }
`;

export const GET_SINGLE_MOVIE = gql`
  query getMovie($movieId: Int!) {
    movie(movieId: $movieId) {
      id
      title
      minutes
    }
  }
`;
