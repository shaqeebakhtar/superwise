import { GraphQLError } from "graphql";

export const clientQuery = {
  getClients: async (obj: any, args: any, { user, prisma }: any, info: any) => {
    if (!user)
      throw new GraphQLError("You must be logged in", {
        extensions: {
          code: "FORBIDDEN",
          http: { status: 403 },
        },
      });

    return await prisma.client.findMany({
      where: {
        creatorId: user.id,
      },
      include: {
        contacts: true,
      },
    });
  },

  getClient: async (
    obj: any,
    { clientId }: any,
    { prisma }: any,
    info: any
  ) => {
    const client = await prisma.client.findUnique({
      where: {
        id: clientId,
      },
      include: {
        contacts: true,
        Project: true,
      },
    });

    console.log(client);

    return client;
  },
};
