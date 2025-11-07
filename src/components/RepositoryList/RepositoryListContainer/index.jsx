import {
  FlatList,
  View,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from "react-native";

import RepositoryItem from "../RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, handlePress }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index }) => (
        <TouchableHighlight key={item.id}>
          <Pressable onPress={() => handlePress(item.id)}>
            <RepositoryItem item={item} />
          </Pressable>
        </TouchableHighlight>
      )}
    />
  );
};

export default RepositoryListContainer;
