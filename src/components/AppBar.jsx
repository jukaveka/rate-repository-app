import { ScrollView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" route="/" />
        <AppBarTab label="Sign In" route="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
