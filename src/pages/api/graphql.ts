import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";
import { buildSchema } from "type-graphql";
import { applyMiddleware } from "graphql-middleware";

import { Req, Res } from "@api/types";
import getConnection from "@api/config/connection";
import resolvers from "@api/config/resolver-config";
import { MovieService } from "@api/modules/movie/movie-service";

export const config = {
  api: {
    bodyParser: false,
  },
};

const withCors = cors({
  origin: "*",
});

export default async (req: Req, res: Res) => {
  const connection = await getConnection();

  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({
    schema: applyMiddleware(schema),
    context: ({ req, res }) => {
      const movieService = new MovieService(connection);

      return {
        res,
        req,
        movieService,
      };
    },
  });

  const handler = withCors(server.createHandler({ path: "/api/graphql" }));

  return handler(req, res);
};
