import { projects } from "../data";

const projectResolvers = {
  projects: () => projects,

  project: (obj: any, { projectId }: any, context: any, info: any) =>
    projects.find((project) => projectId === project.id),
};

export default projectResolvers;
