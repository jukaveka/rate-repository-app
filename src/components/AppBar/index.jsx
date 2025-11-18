import { ScrollView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

import useCurrentUser from "../../hooks/useCurrentUser";

import AppBarTab from "./AppBarTab";
import Text from "../Text";

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
  const { data, loading, error } = useCurrentUser();
  let currentUser = undefined;

  if (loading) {
    return (
      <View>
        <Text>Loading app bar options </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Couldn't load app bar options </Text>
      </View>
    );
  }

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
                key="my-reviews-tab"
                label="My reviews"
                route="/reviews"
              />,
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
