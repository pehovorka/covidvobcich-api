import express = require("express");
import { ApolloServer } from "apollo-server-express";
import initializeFirebase from "./utils/initializeFirebase";

initializeFirebase();

import { config } from "./config";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startApolloServer = async () => {
  let corsOptions = {
    origin: [
      "https://*.covidvobcich.cz",
      "http://localhost:3000",
      "https://studio.apollographql.com",
      "https://*.hvrk.eu",
    ],
    methods: "GET,POST,OPTIONS",
  };

  if (process.env.NODE_ENV === "production") {
    corsOptions = {
      origin: ["https://covidvobcich.cz", "http://localhost:3000"],
      methods: "GET,POST,OPTIONS",
    };
  }

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const app = express();

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: corsOptions,
  });

  const port = config.port || 8081;
  app.listen(port, () => {
    console.log(`🚀  Server ready at http://localhost:${port}/graphql`);
  });
};

startApolloServer();
