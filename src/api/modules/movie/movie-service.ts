import { Connection, Repository } from "typeorm";
import { Movie } from "./movie-entity";

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

  async create(title: string, minutes: number): Promise<Movie> {
    const newMovie = new Movie();

    newMovie.title = title;
    newMovie.minutes = minutes;

    const createdMovie = await this.movieRepository.save(newMovie);

    return createdMovie;
  }

  async update(movieId: number, title?: string, minutes?: number) {
    const updatedMovie = {
      title,
      minutes,
    };

    await this.movieRepository.update(movieId, updatedMovie);

    return true;
  }

  async delete(movieId: number) {
    await this.movieRepository.delete(movieId);

    return true;
  }
}
