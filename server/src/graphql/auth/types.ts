export const authTypes = `#graphql

    scalar void

    type User{
        id: String
        name: String
        email: String
    }

    type Mutation{
        register(name: String!, email: String!, password: String!): User!

        login(email: String!, password: String!): User

        logout: User
    }

`;
