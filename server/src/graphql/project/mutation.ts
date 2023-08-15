import { GraphQLError } from "graphql";

export const projectMutation = {
  addProject: async (obj: any, args: any, { user, prisma }: any, info: any) => {
    const {
      projectName,
      projectDescription,
      projectStatus,
      startDate,
      endDate,
      clientId,
    } = args;

    if (!user)
      throw new GraphQLError("You must be logged in", {
        extensions: {
          code: "FORBIDDEN",
          http: { status: 403 },
        },
      });

    const project = await prisma.project.create({
      data: {
        projectName,
        projectDescription,
        projectStatus,
        startDate,
        endDate,
        clientId,
        creatorId: user.id,
      },
      include: {
        clientName: true,
      },
    });

    return project;
  },

  updateProject: async (obj: any, args: any, { prisma }: any, info: any) => {
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
