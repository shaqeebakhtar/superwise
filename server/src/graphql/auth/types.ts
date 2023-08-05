export const authTypes = `#graphql

    type User{
        id: String
        name: String
        email: String
    }

    type Mutation{
        register(name: String!, email: String!, password: String!): User!
    }

`;
