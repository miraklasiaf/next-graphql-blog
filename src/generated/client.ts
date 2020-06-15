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
  minutes: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationUpdateMovieArgs = {
  minutes?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  movieId: Scalars['Int'];
};


export type MutationDeleteMovieArgs = {
  movieId: Scalars['Int'];
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

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  minutes: Scalars['Int'];
}>;


export type CreateMovieMutation = (
  { __typename?: 'Mutation' }
  & { createMovie: (
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'title' | 'minutes'>
  ) }
);

export type UpdateMovieMutationVariables = Exact<{
  movieId: Scalars['Int'];
  title: Scalars['String'];
  minutes: Scalars['Int'];
}>;


export type UpdateMovieMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateMovie'>
);


export const GetMoviesDocument = gql`
    query GetMovies {
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
    query GetMovie($movieId: Int!) {
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
export const CreateMovieDocument = gql`
    mutation CreateMovie($title: String!, $minutes: Int!) {
  createMovie(title: $title, minutes: $minutes) {
    id
    title
    minutes
  }
}
    `;
export type CreateMovieMutationFn = ApolloReactCommon.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      minutes: // value for 'minutes'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, baseOptions);
      }
export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = ApolloReactCommon.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const UpdateMovieDocument = gql`
    mutation UpdateMovie($movieId: Int!, $title: String!, $minutes: Int!) {
  updateMovie(movieId: $movieId, title: $title, minutes: $minutes)
}
    `;
export type UpdateMovieMutationFn = ApolloReactCommon.MutationFunction<UpdateMovieMutation, UpdateMovieMutationVariables>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      title: // value for 'title'
 *      minutes: // value for 'minutes'
 *   },
 * });
 */
export function useUpdateMovieMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMovieMutation, UpdateMovieMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMovieMutation, UpdateMovieMutationVariables>(UpdateMovieDocument, baseOptions);
      }
export type UpdateMovieMutationHookResult = ReturnType<typeof useUpdateMovieMutation>;
export type UpdateMovieMutationResult = ApolloReactCommon.MutationResult<UpdateMovieMutation>;
export type UpdateMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMovieMutation, UpdateMovieMutationVariables>;