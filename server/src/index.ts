import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Request, type Express } from "express";
import http from "http";
import cors from "cors";
import { json } from "body-parser";
import { typeDefs, resolvers } from "./graphql";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import tokenService from "./services/token-service";
const prisma = new PrismaClient();

interface MyContext {
  req?: Request;
  res?: Response;
  accessToken?: string;
}

dotenv.config();

const getUser = async (req: Request) => {
  if (req.cookies.accessToken) {
    return tokenService.verifyToken(req.cookies.accessToken);
  }
};

(async () => {
  const app: Express = express();

  const port = process.env.PORT || 4000;

  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: "http://localhost:3000/",
      credentials: true,
    }),
    cookieParser(),
    json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({
        user: await getUser(req),
        res,
        prisma,
      }),
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
})();
