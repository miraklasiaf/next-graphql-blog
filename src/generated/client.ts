/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  movieTest: Scalars['String'];
  movies: Array<Movie>;
  movie: Movie;
};


export type QueryMovieArgs = {
  movieId: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['Int'];
  title: Scalars['String'];
  minutes: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMovie: Movie;
  updateMovie: Scalars['Boolean'];
  deleteMovie: Scalars['Boolean'];
};


export type MutationCreateMovieArgs = {
  data: MovieInput;
};


export type MutationUpdateMovieArgs = {
  data: MovieUpdateInput;
  movieId: Scalars['Int'];
};


export type MutationDeleteMovieArgs = {
  movieId: Scalars['Int'];
};

export type MovieInput = {
  title: Scalars['String'];
  minutes: Scalars['Int'];
};

export type MovieUpdateInput = {
  title?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Int']>;
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = (
  { __typename?: 'Query' }
  & { movies: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'title' | 'minutes'>
  )> }
);

export type GetMovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetMovieQuery = (
  { __typename?: 'Query' }
  & { movie: (
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'title' | 'minutes'>
  ) }
);


export const GetMoviesDocument = gql`
    query getMovies {
  movies {
    id
    title
    minutes
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, baseOptions);
      }
export function useGetMoviesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, baseOptions);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = ApolloReactCommon.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetMovieDocument = gql`
    query getMovie($movieId: Int!) {
  movie(movieId: $movieId) {
    id
    title
    minutes
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, baseOptions);
      }
export function useGetMovieLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, baseOptions);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = ApolloReactCommon.QueryResult<GetMovieQuery, GetMovieQueryVariables>;