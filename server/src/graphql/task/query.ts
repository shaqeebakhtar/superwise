export const taskQuery = {
  getTasks: async (
    obj: any,
    { projectId }: any,
    { prisma }: any,
    info: any
  ) => {
    const tasks = await prisma.task.findMany({
      where: {
        projectId,
      },
    });

    return tasks;
  },
};
