import Constants from "expo-constants";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const env = Constants.expoConfig.extra.env;
let apolloUri;

if (env === "development") {
  apolloUri = Constants.expoConfig.extra.apolloUriDev;
}

const httpLink = new HttpLink({
  uri: apolloUri,
});

export const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();

      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (error) {
      console.log(
        "Error faced while adding access token to request headers",
        error
      );

      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default { createApolloClient };
