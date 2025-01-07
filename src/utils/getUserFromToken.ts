import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getUserFromToken = (token: string) => {
  try {
    //@ts-ignore
    JWT.verify(token, process.env.JWT_SIGNRATURE) as {
      userId: number;
    };
  } catch (error) {
    return null;
  }
};
