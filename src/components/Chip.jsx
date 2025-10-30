import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.highlight,
    borderRadius: 10,
    padding: 5,
    width: "50%",
  },
});

const Chip = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" color="light">
        {value}
      </Text>
    </View>
  );
};

export default Chip;
