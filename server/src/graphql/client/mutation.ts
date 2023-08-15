import { GraphQLError } from "graphql";

export const clientMutation = {
  addClient: async (
    obj: any,
    { organization }: any,
    { user, prisma }: any,
    info: any
  ) => {
    if (!user)
      throw new GraphQLError("You must be logged in", {
        extensions: {
          code: "FORBIDDEN",
          http: { status: 403 },
        },
      });

    const client = await prisma.client.create({
      data: {
        organization,
        creatorId: user.id,
      },
    });

    return client;
  },

  updateClient: async (obj: any, args: any, { prisma }: any, info: any) => {
    const { organization, clientId } = args;

    const client = await prisma.client.update({
      data: { organization },
      where: { id: clientId },
    });

    return client;
  },
};
