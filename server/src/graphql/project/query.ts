export const projectQuery = {
  getProjects: async (obj: any, args: any, { prisma }: any, info: any) =>
    await prisma.project.findMany({
      include: {
        Tasks: true,
        Documents: true,
      },
    }),

  getProject: async (
    obj: any,
    { projectId }: any,
    { prisma }: any,
    info: any
  ) => {
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
