import {
  FlatList,
  View,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from "react-native";

import { useNavigate } from "react-router-native";

import RepositoryItem from "../RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const handlePress = (id) => {
    navigate(`/${id}`);
  };

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
