import { Resolvers } from "../../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    helloWorld: (): string => "Hello world!"
  },
  Mutation: {
    helloUser: (_root, { user }): string => `Hello ${user}!`
  }
};

export default resolvers;
