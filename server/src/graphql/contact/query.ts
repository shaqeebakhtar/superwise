import prisma from "../../db";

export const contactQuery = {
  getContacts: async (obj: any, { clientId }: any, context: any, info: any) => {
    const contacts = await prisma.contact.findMany({
      where: {
        clientId,
      },
    });

    return contacts;
  },

  getContact: async (obj: any, { contactId }: any, context: any, info: any) => {
    const contact = await prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    return contact;
  },
};
