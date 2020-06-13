import { Connection, Repository } from "typeorm";
import { Movie } from "./movie-entity";
import { MovieInput } from "./input/movie-input";
import { MovieUpdateInput } from "./input/movie-update-input";

export class MovieService {
  movieRepository: Repository<Movie>;

  constructor(connection: Connection) {
    this.movieRepository = connection?.getRepository(Movie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findOne(movieId: number): Promise<Movie | undefined> {
    return this.movieRepository.findOne(movieId);
  }

  async create(data: MovieInput): Promise<Movie> {
    const newMovie = new Movie();

    newMovie.title = data.title;
    newMovie.minutes = data.minutes;

    const createdMovie = await this.movieRepository.save(newMovie);

    return createdMovie;
  }

  async update(movieId: number, data: MovieUpdateInput) {
    await this.movieRepository.update({ movieId }, data);
  }

  async delete(movieId: number) {
    await this.movieRepository.delete(movieId);
  }
}
