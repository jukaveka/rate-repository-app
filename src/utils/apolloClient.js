import Constants from "expo-constants";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const env = Constants.expoConfig.extra.env;
let apolloUri;

if (env === "development") {
  const portSeparatorIndex = Constants.expoConfig.hostUri.indexOf(":");
  const ipAddress = Constants.expoConfig.hostUri.slice(0, portSeparatorIndex);

  const apolloUriBase = Constants.expoConfig.extra.apolloUriDev;

  apolloUri = apolloUriBase.replace("placeholder", ipAddress);
}

const httpLink = new HttpLink({
  uri: apolloUri,
});

export const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();

      return {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      };
    } catch (error) {
      console.log(
        "Error faced while checking fetching access token error",
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
