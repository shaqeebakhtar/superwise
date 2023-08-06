export const clientQuery = {
  getClients: async (obj: any, args: any, { prisma }: any, info: any) =>
    await prisma.client.findMany({
      include: {
        contacts: true,
        Project: true,
      },
    }),

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
