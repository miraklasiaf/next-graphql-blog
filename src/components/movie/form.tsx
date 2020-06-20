import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_MOVIE, GET_MOVIES } from "@graphql/movie";
import { Movie } from "generated/client";

interface MovieResult {
  movies: Movie[];
}

export default function Form() {
  const [title, setTitle] = useState("");
  const [minutes, setMinutes] = useState("");
  const [createMovie, { loading }] = useMutation(CREATE_MOVIE);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie({
      variables: { title, minutes: parseInt(minutes, 10) },
      update(cache, { data: { createMovie } }) {
        const movies = cache.readQuery<MovieResult>({
          query: GET_MOVIES,
        })!.movies;
        cache.writeQuery({
          query: GET_MOVIES,
          data: { movies: movies.concat([createMovie]) },
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <h1>Add Movie</h1>
        <input
          className="form-input"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
        />
        <input
          className="form-input"
          placeholder="minutes"
          name="minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          type="number"
          required
        />
        <button
          className="text-white bg-blue-600 px-3 py-2 shadow-lg rounded"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
