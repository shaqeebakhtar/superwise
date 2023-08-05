import { clientMutation, clientQuery, clientTypes } from "./client";
import { contactMutation, contactQuery, contactTypes } from "./contact";
import { projectMutation, projectQuery, projectTypes } from "./project";

export const typeDefs = `
    ${clientTypes}
    ${contactTypes}
    ${projectTypes}
`;

export const resolvers = {
  Query: {
    ...clientQuery,
    ...contactQuery,
    ...projectQuery,
  },

  Mutation: {
    ...clientMutation,
    ...contactMutation,
    ...projectMutation,
  },
};
