import projectResolver from "./project";
import clientResolvers from "./client";
import registerResolver from "./register";

const resolvers = {
  Query: {
    ...projectResolver,
    ...clientResolvers,
  },

  Mutation: {
    ...registerResolver,
  },
};

export default resolvers;
