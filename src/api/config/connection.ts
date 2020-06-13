import { createConnection, getConnection } from "typeorm";

import * as Movie from "../modules/movie/movie-entity";

export default async function () {
  let connection;

  try {
    connection = await getConnection();

    if (connection.isConnected) {
      await connection.close();
    }
  } catch (error) {}

  try {
    connection = await createConnection({
      type: process.env.NEXT_PUBLIC_DATABASE_TYPE as any,
      host: process.env.NEXT_PUBLIC_DATABASE_HOST as any,
      port: process.env.NEXT_PUBLIC_DATABASE_PORT as any,
      username: process.env.NEXT_PUBLIC_DATABASE_USERNAME as any,
      password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD as any,
      database: process.env.NEXT_PUBLIC_DATABASE_NAME as any,
      entities: [...Object.values(Movie)],
      synchronize: true,
      logging: false,
      //   ...(process.env.NODE_ENV === "production" && {
      //     ssl: {
      //       ca: process.env.DATABASE_SSL_CERTIFICATE,
      //     },
      //   }),
    });
  } catch (error) {}

  return connection;
}
