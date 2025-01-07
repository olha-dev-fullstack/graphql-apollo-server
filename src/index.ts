import { ApolloServer, gql } from "apollo-server";
import { Query } from "./resolvers";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query
  }
});

server.listen().then(({url}) => {
    console.log(`Server ready on ${url}`);
    
})
