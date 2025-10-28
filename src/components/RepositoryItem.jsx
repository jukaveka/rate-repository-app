import { StyleSheet, View } from "react-native";
import RepositoryItemDetails from "./RepositoryItemDetails";
import RepositoryItemLogo from "./RepositoryItemLogo";
import RepositoryItemStats from "./RepositoryItemStats";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginHorizontal: 10,
  },
  item: {
    margin: 20,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemLogo imageUrl={item.ownerAvatarUrl} />
      <RepositoryItemDetails item={item} />
      <RepositoryItemStats item={item} />
    </View>
  );
};

export default RepositoryItem;
