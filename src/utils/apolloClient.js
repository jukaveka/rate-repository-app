import Constants from "expo-constants";
import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const env = Constants.expoConfig.extra.env;
let apolloUri;

if (env === "development") {
  const portSeparatorIndex = Constants.expoConfig.hostUri.indexOf(":");
  const ipAddress = Constants.expoConfig.hostUri.slice(0, portSeparatorIndex);

  const apolloUriBase = Constants.expoConfig.extra.apolloUriDev;

  apolloUri = apolloUriBase.replace("placeholder", ipAddress);
}

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: apolloUri,
    }),
    cache: new InMemoryCache(),
  });
};

export default { createApolloClient };
