import { StyleSheet, View } from "react-native";
import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    paddingVertical: 5,
  },
});

const Stat = ({ value, label }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" style={styles.item}>
        {value}
      </Text>
      <Text color="textSecondary" fontWeight="bold" style={styles.item}>
        {label}
      </Text>
    </View>
  );
};

export default Stat;
