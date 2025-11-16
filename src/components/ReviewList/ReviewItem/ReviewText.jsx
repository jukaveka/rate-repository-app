import { StyleSheet, View } from "react-native";

import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    marginLeft: "20%",
    marginBottom: "5%",
  },
});

const ReviewText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default ReviewText;
