import { StyleSheet, View } from "react-native";

import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    marginLeft: "22%",
    width: "70%",
  },
});

const ReviewText = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default ReviewText;
