import { clients } from "../data";

const clientResolvers = {
  clients: () => clients,

  client: (obj: any, { clientId }: any, context: any, info: any) =>
    clients.find((client) => clientId === client.id),
};

export default clientResolvers;
