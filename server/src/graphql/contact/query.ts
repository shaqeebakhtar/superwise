import prisma from "../../db";

export const contactQuery = {
  getContacts: async () => await prisma.contact.findMany(),

  getContact: async (obj: any, { contactId }: any, context: any, info: any) => {
    const contact = await prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    return contact;
  },
};
