import { ScrollView, StyleSheet, View } from "react-native";

import { useQuery } from "@apollo/client/react";

import Constants from "expo-constants";

import { CURRENT_USER } from "../../graphql/queries/authenticationQueries";

import AppBarTab from "./AppBarTab";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
});

const AppBar = () => {
  const { data } = useQuery(CURRENT_USER);
  let currentUser = undefined;

  if (data) {
    currentUser = data.me;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab key="repositories-tab" label="Repositories" route="/" />
        {currentUser
          ? [
              <AppBarTab key="review-tab" label="Add review" route="/review" />,
              <AppBarTab
                key="sign-out-tab"
                label="Sign out"
                route="/signout"
              />,
            ]
          : [
              <AppBarTab key="sign-in-tab" label="Sign in" route="/signin" />,
              <AppBarTab key="sign-up-tab" label="Sign up" route="/signup" />,
            ]}
      </ScrollView>
    </View>
  );
};

export default AppBar;
