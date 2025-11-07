import { Pressable, StyleSheet, View } from "react-native";

import * as Linking from "expo-linking";

import theme from "../../../theme";

import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: "5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: theme.colors.button,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
});

const RepositoryItemLink = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.item} onPress={handlePress}>
        <Text fontWeight="bold" color="light" fontSize="subheading">
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};

export default RepositoryItemLink;
