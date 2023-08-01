const clientTypeDefs = `#graphql

# type declaration for client
type Client{
    id: String!
    organizationName: String!
}

type Query{
    # query to fetch all the clients
    clients: [Client]!

    # query to get a single client with client Id
    client(clientId: String!): Client!
}

`;

export default clientTypeDefs;
