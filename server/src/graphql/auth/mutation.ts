import prisma from "../../db";
import hashService from "../../services/hash-service";

export const authMutation = {
  register: async (obj: any, args: any, context: any, info: any) => {
    const { name, email, password } = args;

    const hashPass = await hashService.generateHash(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPass,
      },
    });

    return user;
  },
};
