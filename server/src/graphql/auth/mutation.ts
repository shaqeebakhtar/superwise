import { GraphQLError } from "graphql";
import hashService from "../../services/hash-service";
import tokenService from "../../services/token-service";

export const authMutation = {
  register: async (
    obj: any,
    args: any,
    { req, res, prisma }: any,
    info: any
  ) => {
    const { name, email, password } = args;

    const hashPass = await hashService.generateHash(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPass,
      },
    });

    const accessToken = await tokenService.generateTokens({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return user;
  },

  login: async (obj: any, args: any, { req, res, prisma }: any, info: any) => {
    const { email, password } = args;
    const hashPass = await hashService.generateHash(password);

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new GraphQLError("User not registered");

    if (user.password !== hashPass)
      throw new GraphQLError("password mismatch", {
        extensions: {
          code: "UNAUTHENTICATED",
          http: { status: 401 },
        },
      });

    const accessToken = await tokenService.generateTokens({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return user;
  },

  logout: async (obj: any, args: any, { user, res }: any, info: any) => {
    res.clearCookie("accessToken");

    return (user = null);
  },
};
