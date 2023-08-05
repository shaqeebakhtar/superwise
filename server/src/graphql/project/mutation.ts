import prisma from "../../db";

export const projectMutation = {
  addProject: async (obj: any, args: any, context: any, info: any) => {
    const {
      projectName,
      projectDescription,
      projectStatus,
      startDate,
      endDate,
      clientId,
    } = args;

    const project = await prisma.project.create({
      data: {
        projectName,
        projectDescription,
        projectStatus,
        startDate,
        endDate,
        clientId,
      },
      include: {
        clientName: true,
      },
    });

    return project;
  },

  updateProject: async (obj: any, args: any, context: any, info: any) => {
    const {
      projectName,
      projectDescription,
      projectStatus,
      startDate,
      endDate,
      projectId,
    } = args;

    const project = await prisma.project.update({
      data: {
        projectName,
        projectDescription,
        projectStatus,
        startDate,
        endDate,
      },
      where: {
        id: projectId,
      },
    });

    return project;
  },
};
