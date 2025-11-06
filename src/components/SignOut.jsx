import { View } from "react-native";

import { useNavigate } from "react-router-native";

import { useApolloClient } from "@apollo/client/react";

import useAuthStorage from "../hooks/useAuthStorage";

import Text from "./Text";

const SignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  setTimeout(() => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  }, 5000);

  return (
    <View>
      <Text> Signing out of your account... </Text>
    </View>
  );
};

export default SignOut;
