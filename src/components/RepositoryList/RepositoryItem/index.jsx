import { StyleSheet, View } from "react-native";

import RepositoryItemDetails from "./RepositoryItemDetails";
import RepositoryItemLogo from "./RepositoryItemLogo";
import RepositoryItemStats from "./RepositoryItemStats";
import RepositoryItemLink from "./RepositoryItemLink";

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
  const itemHasUrl = () => {
    return item.url !== undefined;
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryItemLogo imageUrl={item.ownerAvatarUrl} />
      <RepositoryItemDetails item={item} />
      <RepositoryItemStats item={item} />
      {itemHasUrl() ? <RepositoryItemLink url={item.url} /> : null}
    </View>
  );
};

export default RepositoryItem;
