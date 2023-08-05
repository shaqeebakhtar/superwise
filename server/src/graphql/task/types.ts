export const taskTypes = `#graphql

    type Task{
        id: String!
        taskName: String!
        taskStatus: String!
        dueDate: String!
    }

    type Query{
        getTasks(projectId: String!): [Task]
    }

    type Mutation{
        addTask(taskName: String!, taskStatus: String!, dueDate: String!, projectId: String!): Task!

        updateTask(taskName: String, taskStatus: String, dueDate: String, taskId: String!): Task!
    }

`;
