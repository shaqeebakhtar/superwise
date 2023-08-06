export const documentMutation = {
  addDocument: async (obj: any, args: any, { prisma }: any, info: any) => {
    const { docName, docUrl, projectId } = args;

    const task = await prisma.document.create({
      data: {
        docName,
        docUrl,
        projectId,
      },
    });

    return task;
  },

  updateDocument: async (obj: any, args: any, { prisma }: any, info: any) => {
    const { docName, docUrl, documentId } = args;

    const task = await prisma.document.update({
      data: {
        docName,
        docUrl,
      },
      where: {
        id: documentId,
      },
    });

    return task;
  },
};
