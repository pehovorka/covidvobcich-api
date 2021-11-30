import { CorsOptions } from "apollo-server-express";

export const getCorsOptions = (): CorsOptions => {
  let corsOptions: CorsOptions;

  if (process.env.NODE_ENV === "production") {
    corsOptions = {
      origin: ["https://covidvobcich.cz", "http://localhost:3000"],
      methods: "GET,POST,OPTIONS",
    };
  } else {
    corsOptions = {
      origin: "*",
      methods: "GET,POST,OPTIONS",
    };
  }

  return corsOptions;
};
