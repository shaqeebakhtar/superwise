import projectResolver from "./project";
import clientResolvers from "./client";

const resolvers = {
  Query: {
    ...projectResolver,
    ...clientResolvers,
  },
};

export default resolvers;
