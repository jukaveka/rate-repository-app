import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigate } from "react-router-native";

import { useApolloClient } from "@apollo/client/react";

import useAuthStorage from "../hooks/useAuthStorage";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 50,
    backgroundColor: "#FFFFFF",
  },
  text: {
    padding: 50,
  },
});

const SignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      authStorage.removeAccessToken();
      apolloClient.resetStore();
      navigate("/");
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Text fontSize="subheading" style={styles.text}>
        Signing out of your account...
      </Text>
    </View>
  );
};

export default SignOut;
