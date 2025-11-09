import { FlatList, TouchableHighlight, Pressable } from "react-native";

import RepositoryItem from "../RepositoryItem";
import ItemSeparator from "../../ItemSeparator";

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
