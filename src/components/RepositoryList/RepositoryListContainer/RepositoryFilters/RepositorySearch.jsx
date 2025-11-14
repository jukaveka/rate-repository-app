import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "1%",
  },
});

const RepositorySearch = ({ search, setSearch }) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search repositories"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

export default RepositorySearch;
