import prisma from "../../db";

export const clientMutation = {
  addClient: async (
    obj: any,
    { organization }: any,
    context: any,
    info: any
  ) => {
    const client = await prisma.client.create({
      data: {
        organization,
      },
    });

    return client;
  },

  updateClient: async (obj: any, args: any, context: any, info: any) => {
    const { organization, clientId } = args;

    const client = await prisma.client.update({
      data: { organization },
      where: { id: clientId },
    });

    return client;
  },
};
