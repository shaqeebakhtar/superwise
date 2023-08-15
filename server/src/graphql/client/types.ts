export const clientTypes = `#graphql

    type Client{
        id: String!
        organization: String!
    }

    type Project{
    id: String!
    projectName: String!
    projectStatus: String!
    clientName: Client!
    startDate: String!
    endDate: String!
    projectDescription: String
    }

    type Contact{
    id: String!
    name: String!
    email: String!
    clientId: String
    }

    # type declaration for client
    type Client{
    id: String!
    organization: String!
    contacts: [Contact]
    }

    type Query{
    # query to fetch all the clients
    getClients: [Client]!

    # query to get a single client with client Id
    getClient(clientId: String!): Client!
    }


    type Mutation{
    # add a client
    addClient(organization: String!): Client!

    # update a client
    updateClient(organization: String, clientId: String!): Client!
    }

`;
