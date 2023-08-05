import prisma from "../../db";

export const taskMutation = {
  addTask: async (obj: any, args: any, context: any, info: any) => {
    const { taskName, taskStatus, dueDate, projectId } = args;

    const task = await prisma.task.create({
      data: {
        taskName,
        taskStatus,
        dueDate,
        projectId,
      },
    });

    return task;
  },

  updateTask: async (obj: any, args: any, context: any, info: any) => {
    const { taskName, taskStatus, dueDate, taskId } = args;

    const task = await prisma.task.update({
      data: {
        taskName,
        taskStatus,
        dueDate,
      },
      where: {
        id: taskId,
      },
    });

    return task;
  },
};
