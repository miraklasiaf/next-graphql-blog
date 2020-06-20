import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      minutes
    }
  }
`;

export const GET_MOVIE = gql`
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

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($movieId: Int!) {
    deleteMovie(movieId: $movieId)
  }
`;
