import { FlatList, TouchableHighlight, Pressable } from "react-native";

import RepositoryItem from "../RepositoryItem";
import ItemSeparator from "../../ItemSeparator";
import RepositoryFilterOptions from "../RepositoryFilterOptions";

const RepositoryListContainer = ({ repositories, handlePress, setSortBy }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<RepositoryFilterOptions setSortBy={setSortBy} />}
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
