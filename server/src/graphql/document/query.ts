import prisma from "../../db";

export const documentQuery = {
  getDocuments: async (
    obj: any,
    { projectId }: any,
    context: any,
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
