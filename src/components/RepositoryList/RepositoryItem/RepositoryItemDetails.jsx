import { Pressable, StyleSheet, View } from "react-native";
import Text from "../../Text";
import theme from "../../../theme";
import Chip from "../../Chip";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "65%",
  },
  item: {
    margin: 2,
  },
  highlight: {
    width: "50%",
    backgroundColor: theme.colors.highlight,
    borderRadius: 10,
  },
});

const RepositoryItemDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" style={styles.item}>
        {item.fullName}
      </Text>

      <Text fontSize="caption" style={styles.item}>
        {item.description}
      </Text>

      <Chip value={item.language} />
    </View>
  );
};

export default RepositoryItemDetails;
