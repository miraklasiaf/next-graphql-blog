import { ServerResponse, ServerRequest } from "microrouter";
import { MovieService } from "../modules/movie/movie-service";

export interface Req extends ServerRequest {
  cookies: { [key: string]: string };
  body: any;
}

export type Res = ServerResponse;

export type AppContext = {
  res: Res;
  req: Req;
  movieService: MovieService;
};
