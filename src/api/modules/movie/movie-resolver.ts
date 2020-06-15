import { Resolver, Arg, Mutation, Int, Query, Ctx } from "type-graphql";
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
    @Arg("title", () => String) title: string,
    @Arg("minutes", () => Int) minutes: number,
    @Ctx() ctx: AppContext
  ) {
    return ctx.movieService.create(title, minutes);
  }

  @Mutation(() => Boolean)
  async updateMovie(
    @Ctx() ctx: AppContext,
    @Arg("movieId", () => Int) movieId: number,
    @Arg("title", () => String, { nullable: true }) title?: string,
    @Arg("minutes", () => Int, { nullable: true }) minutes?: number
  ) {
    return ctx.movieService.update(movieId, title, minutes);
  }

  @Mutation(() => Boolean)
  async deleteMovie(
    @Arg("movieId", () => Int) movieId: number,
    @Ctx() ctx: AppContext
  ) {
    return ctx.movieService.delete(movieId);
  }
}
