export const projectQuery = {
  getProjects: async (obj: any, args: any, { user, prisma }: any, info: any) =>
    await prisma.project.findMany({
      where: {
        creatorId: user.id,
      },
      include: {
        Tasks: true,
        Documents: true,
      },
    }),

  getProject: async (
    obj: any,
    { projectId }: any,
    { user, prisma }: any,
    info: any
  ) => {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
        creatorId: user.id,
      },
      include: {
        Tasks: true,
        Documents: true,
      },
    });

    return project;
  },
};
