import { clientMutation, clientQuery, clientTypes } from "./client";
import { contactMutation, contactQuery, contactTypes } from "./contact";
import { projectMutation, projectQuery, projectTypes } from "./project";
import { taskMutation, taskQuery, taskTypes } from "./task";
import { documentMutation, documentQuery, documentTypes } from "./document";
import { authMutation, authTypes } from "./auth";

export const typeDefs = `
    ${clientTypes}
    ${contactTypes}
    ${projectTypes}
    ${taskTypes}
    ${documentTypes}
    ${authTypes}
`;

export const resolvers = {
  Query: {
    ...clientQuery,
    ...contactQuery,
    ...projectQuery,
    ...taskQuery,
    ...documentQuery,
  },

  Mutation: {
    ...clientMutation,
    ...contactMutation,
    ...projectMutation,
    ...taskMutation,
    ...documentMutation,
    ...authMutation,
  },
};
