export const contactMutation = {
  addContact: async (obj: any, args: any, { prisma }: any, info: any) => {
    const { name, email, clientId } = args;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        clientId,
      },
    });

    return contact;
  },

  updateContact: async (obj: any, args: any, { prisma }: any, info: any) => {
    const { name, email, contactId } = args;

    const contact = await prisma.contact.update({
      data: {
        name,
        email,
      },
      where: {
        id: contactId,
      },
    });

    return contact;
  },
};
