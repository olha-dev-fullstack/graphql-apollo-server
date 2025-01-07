import { ApolloServer, gql } from "apollo-server";
import { Mutation, Profile, Query, User } from "./resolvers";
import { typeDefs } from "./schema";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { getUserFromToken } from "./utils/getUserFromToken";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  userInfo: {
    userId: number
  } | null
}
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Profile,
    User
  },
  context: async ({ req }: any) => {
    const userInfo = await getUserFromToken(req.headers.authorization);
    return {
      prisma,
      userInfo
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});
