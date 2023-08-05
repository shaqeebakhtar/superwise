export const documentTypes = `#graphql

    type Document{
        id: String!
        docUrl: String!
        docName: String!
    }

    type Query{
        getDocuments(projectId: String!): [Document]!
    }

    type Mutation{
        addDocument(docName: String!, docUrl: String!, projectId: String!): Document!

        updateDocument(docName: String!, docUrl: String!, documentId: String!): Document!
    }

`;
