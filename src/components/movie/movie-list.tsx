import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "./error-message";
import { GET_MOVIES } from "@graphql/movie";
import { Movie } from "generated/client";

interface MoviesData {
  movies: Movie[];
}

export default function PostList() {
  const { loading, error, data } = useQuery<MoviesData>(GET_MOVIES);

  if (error) return <ErrorMessage message="Error loading movies." />;
  if (loading) return <div>Loading</div>;

  return (
    <div className="w-full flex max-w-xl flex-col justify-center items-center mt-3 py-3">
      {data &&
        data.movies.map((movie, index) => (
          <div
            className="flex justify-center items-center w-full max-w-lg mt-3"
            key={movie.id}
          >
            <div className="w-full max-w-xs flex justify-between items-center">
              <h1>
                {index + 1}. {movie.title}
              </h1>
              <p className="text-left">{movie.minutes} minutes</p>
            </div>
          </div>
        ))}
    </div>
  );
}
