import { FlatList, View, StyleSheet, TouchableHighlight } from "react-native";

import useReporitories from "../hooks/useRepositories";

import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useReporitories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index }) => (
        <TouchableHighlight key={item.id}>
          <RepositoryItem item={item} />
        </TouchableHighlight>
      )}
    />
  );
};

export default RepositoryList;
