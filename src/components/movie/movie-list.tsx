import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "./error-message";
import { GET_ALL_MOVIE } from "../../graphql/movie";

export default function PostList() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIE);

  if (error) return <ErrorMessage message="Error loading movies." />;
  if (loading) return <div>Loading</div>;

  const { movies } = data;

  return (
    <div className="container">
      <h1 className="title">Movie List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <div className="grid">
              <div className="card">
                <span>{index + 1}. </span>
                <h1 className="title">{movie.title}</h1>
                <p className="description">{movie.minutes}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: "";
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </div>
  );
}
