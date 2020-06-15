import gql from "graphql-tag";

export const GET_ALL_MOVIE = gql`
  query GetMovies {
    movies {
      id
      title
      minutes
    }
  }
`;

export const GET_SINGLE_MOVIE = gql`
  query GetMovie($movieId: Int!) {
    movie(movieId: $movieId) {
      id
      title
      minutes
    }
  }
`;

export const CREATE_MOVIE = gql`
  mutation CreateMovie($title: String!, $minutes: Int!) {
    createMovie(title: $title, minutes: $minutes) {
      id
      title
      minutes
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($movieId: Int!, $title: String!, $minutes: Int!) {
    updateMovie(movieId: $movieId, title: $title, minutes: $minutes)
  }
`;
