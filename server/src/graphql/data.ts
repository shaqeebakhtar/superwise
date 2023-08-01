export const projects = [
  {
    id: "W1690462897271",
    projectName: "Project 1",
    projectStatus: "Not Started",
    clientName: "Demo Clients",
    startDate: "2023-07-29",
    endDate: "2023-07-30",
    projectDescription: "Project 1 description",
  },
  {
    id: "E1690778132046",
    projectName: "Project 2",
    projectStatus: "In Progress",
    clientName: "Wisdmlabs",
    startDate: "2023-08-04",
    endDate: "2023-08-06",
    projectDescription: "Project 2 Description",
  },
];

export const clients = [
  {
    id: "B1677573696763",
    organizationName: "Demo Clients",
  },
  {
    id: "R1677574041304",
    organizationName: "Wisdmlabs",
  },
];

export const tasks = [
  {
    id: "L1690777907815",
    taskName: "Task 1",
    taskStatus: "In Progress",
    dueDate: "2023-08-03",
    taskNote: "Task 1 note",
    projectId: "W1690462897271",
  },
];

export const documents = [
  {
    id: "H1690777931511",
    projectId: "W1690462897271",
    docName: "Document 1",
    docUrl: "https://",
  },
];

export const contacts = [
  {
    id: "N1677573729545",
    clientId: "B1677573696763",
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
  {
    id: "P1677573985851",
    clientId: "B1677573696763",
    name: "William James",
    email: "william@gmail.com",
  },
  {
    id: "B1677574062684",
    clientId: "R1677574041304",
    name: "Shaqeeb Akhtar",
    email: "shaqeeb.akhtar@gmail.com",
  },
];
