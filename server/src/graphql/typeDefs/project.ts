const projectTypeDefs = `#graphql

scalar Date

# type declaration for project
type Project{
    id: String!
    projectName: String!
    projectStatus: String!
    clientName: String!
    startDate: Date!
    endDate: Date!
    projectDescription: String
}

type Query{
    # query to fetch all the projects
    projects: [Project]!

    # query to get a single project with project Id
    project(projectId: String!): Project
}

`;

export default projectTypeDefs;
