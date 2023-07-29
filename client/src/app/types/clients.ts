export interface Contact {
  id: string;
  name: string;
  email: string;
}

export interface Client {
  id: string;
  organization: string;
  contacts?: Contact[];
}
