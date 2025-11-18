import { FlatList, TouchableHighlight, Pressable } from "react-native";

import RepositoryItem from "../RepositoryItem";
import ItemSeparator from "../../ItemSeparator";
import RepositoryFilters from "./RepositoryFilters";

const RepositoryListContainer = ({
  repositories,
  fetchMore,
  handlePress,
  setSortBy,
  search,
  setSearch,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      ListHeaderComponent={
        <RepositoryFilters
          setSortBy={setSortBy}
          search={search}
          setSearch={setSearch}
        />
      }
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
