export const projectTypes = `#graphql

    scalar Date

    type Client{
        id: String!
        organization: String!
    }

    # type declaration for project
    type Project{
        id: String!
        projectName: String!
        projectStatus: String!
        clientName: Client!
        startDate: String!
        endDate: String!
        projectDescription: String
    }

    type Query{
        # query to fetch all the projects
        getProjects: [Project]!

        # query to get a single project with project Id
        getProject(projectId: String!): Project
    }

    type Mutation{
        addProject(projectName: String!, projectDescription: String!, projectStatus: String!, startDate: String!, endDate: String!, clientId: String!): Project!

        updateProject(projectName: String, projectDescription: String, projectStatus: String, startDate: String, endDate: String, projectId: String!): Project!
    }

`;
