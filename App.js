import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client/react";

import { createApolloClient } from "./src/utils/apolloClient";

import Main from "./src/components/Main";

const apolloClient = createApolloClient();

const App = () => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </ApolloProvider>
    </>
  );
};

export default App;
