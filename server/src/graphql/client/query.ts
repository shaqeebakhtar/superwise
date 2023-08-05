import prisma from "../../db";

export const clientQuery = {
  getClients: async () =>
    await prisma.client.findMany({
      include: {
        contacts: true,
        Project: true,
      },
    }),

  getClient: async (obj: any, { clientId }: any, context: any, info: any) => {
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
