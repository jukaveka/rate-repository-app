import { StyleSheet, View } from "react-native";

import RepositorySort from "./RepositorySort";
import RepositorySearch from "./RepositorySearch";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: "2.5%",
    margin: "2.5%",
  },
  search: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  sort: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

const RepositoryFilters = ({ setSortBy, search, setSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <RepositorySearch search={search} setSearch={setSearch} />
      </View>

      <View style={styles.sort}>
        <RepositorySort setSortBy={setSortBy} />
      </View>
    </View>
  );
};

export default RepositoryFilters;
