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
        <AppBarTab label="Repositories" route="/" />
        {currentUser ? (
          [
            <AppBarTab label="Add review" route="/review" />,
            <AppBarTab label="Sign out" route="/signout" />,
          ]
        ) : (
          <AppBarTab label="Sign in" route="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
