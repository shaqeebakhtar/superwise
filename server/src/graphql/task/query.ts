import prisma from "../../db";

export const taskQuery = {
  getTasks: async (obj: any, { projectId }: any, context: any, info: any) => {
    const tasks = await prisma.task.findMany({
      where: {
        projectId,
      },
    });

    return tasks;
  },
};
