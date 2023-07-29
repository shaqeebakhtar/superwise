export interface Document {
  id: string;
  docUrl: string;
  docName: string;
}

export interface Task {
  id: string;
  taskName: string;
  taskNote: string;
  taskStatus: string;
  dueDate: string;
}

export interface Project {
  id: string;
  clientName: string;
  projectName: string;
  projectDescription: string;
  projectStatus: string;
  startDate: string;
  endDate: string;
  documents: Document[];
  tasks: Task[];
}

export enum Status {
  "Not Started",
  "Completed",
  "In Progress",
}
