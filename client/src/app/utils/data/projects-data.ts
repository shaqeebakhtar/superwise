const projectsData = [
  {
    id: 1,
    projectName: "Demo Project",
    projectStatus: "In Progress",
    clientName: "Demo Organization",
    startDate: "2023-02-26",
    endDate: "2023-03-01",
    projectDescription: "Create a software tool for small businesses.",
    tasks: [
      {
        id: 1,
        taskName: "Demo Task 1",
        taskStatus: "Not Started",
        dueDate: "2023-03-01",
        taskNote: "This is a demo Task 1",
      },
      {
        id: 2,
        taskName: "Demo Task 2",
        taskStatus: "Completed",
        dueDate: "2023-02-27",
        taskNote: "This is a demo Task 2",
      },
    ],
    documents: [
      {
        id: 1,
        docName: "Demo Document",
        docUrl: "https://url.com",
      },
    ],
  },
];

export default projectsData;
