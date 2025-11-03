import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://192.168.141.127:4000/graphql",
    }),
    cache: new InMemoryCache(),
  });
};

export default { createApolloClient };
