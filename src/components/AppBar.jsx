import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  item: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textLight,
    paddingBottom: 20,
    paddingStart: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Link to="/">
          <Text style={styles.item}> Repositories </Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/signin">
          <Text style={styles.item}> Sign In </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBar;
