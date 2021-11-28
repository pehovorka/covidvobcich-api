import express = require("express");
import { ApolloServer } from "apollo-server-express";
import initializeFirebase from "./utils/initializeFirebase";

initializeFirebase();

import { config } from "./config";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startApolloServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  const app = express();

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = config.port || 8081;
  app.listen(port, () => {
    console.log(`🚀  Server ready at http://localhost:${port}/graphql`);
  });
};

startApolloServer();
