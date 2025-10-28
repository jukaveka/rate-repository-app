import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  heading: {
    fontSize: theme.fontSizes.subheading,
    paddingVertical: 25,
    paddingStart: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.heading}> Repositories </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
