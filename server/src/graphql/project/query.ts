import prisma from "../../db";

export const projectQuery = {
  getProjects: async () =>
    await prisma.project.findMany({
      include: {
        Tasks: true,
        Documents: true,
      },
    }),

  getProject: async (obj: any, { projectId }: any, context: any, info: any) => {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        Tasks: true,
        Documents: true,
      },
    });

    return project;
  },
};
