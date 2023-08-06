export const documentQuery = {
  getDocuments: async (
    obj: any,
    { projectId }: any,
    { prisma }: any,
    info: any
  ) => {
    const tasks = await prisma.document.findMany({
      where: {
        projectId,
      },
    });

    return tasks;
  },
};
