export const contactTypes = `#graphql

type Contact{
    id: String!
    name: String!
    email: String!
    clientId: String
}

type Query{
    getContacts: [Contact]!

    getContact(contactId: String!): Contact!
}

type Mutation{
    addContact(name: String!, email: String!, clientId: String): Contact!

    updateContact(name: String, email: String, contactId: String!): Contact!
}

`;
