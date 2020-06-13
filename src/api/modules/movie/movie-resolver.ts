import { Resolver, Arg, Mutation, Int, Query, Ctx } from "type-graphql";
import { MovieUpdateInput } from "./input/movie-update-input";
import { MovieInput } from "./input/movie-input";
import { Movie } from "./movie-entity";
import { AppContext } from "@api/types";

@Resolver()
export class MovieResolver {
  @Query(() => String)
  movieTest() {
    return "Hello, Faisal";
  }

  @Query(() => [Movie])
  movies(@Ctx() ctx: AppContext) {
    return ctx.movieService.findAll();
  }

  @Query(() => Movie)
  movie(@Arg("movieId", () => Int) movieId: number, @Ctx() ctx: AppContext) {
    return ctx.movieService.findOne(movieId);
  }

  @Mutation(() => Movie)
  async createMovie(
    @Arg("data", () => MovieInput) data: MovieInput,
    @Ctx() ctx: AppContext
  ) {
    return ctx.movieService.create(data);
  }

  @Mutation(() => Boolean)
  async updateMovie(
    @Arg("movieId", () => Int) movieId: number,
    @Arg("data", () => MovieUpdateInput) data: MovieUpdateInput,
    @Ctx() ctx: AppContext
  ) {
    await ctx.movieService.update(movieId, data);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteMovie(
    @Arg("movieId", () => Int) movieId: number,
    @Ctx() ctx: AppContext
  ) {
    await ctx.movieService.delete(movieId);
    return true;
  }
}
