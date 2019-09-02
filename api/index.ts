import { ApolloServer } from "apollo-server-micro";
import { importSchema } from "graphql-import";
import { join } from "path";
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./src/resolvers";
const typeDefs = importSchema(join(__dirname, "./schema.graphql"));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({
  schema,
  resolvers,
  introspection: process.env.NODE_ENV === "development",
  playground: process.env.NODE_ENV === "development"
});

export default server.createHandler({ path: "/api/" });
