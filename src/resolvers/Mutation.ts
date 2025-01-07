import { authResolvers } from "./Mutation/auth";
import { postResolvers } from "./Mutation/post";
export const Mutation = {
  ...postResolvers,
  ...authResolvers
};
