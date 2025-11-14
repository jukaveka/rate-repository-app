import { StyleSheet, View } from "react-native";

import RepositorySort from "./RepositorySort";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});

const RepositoryFilterOptions = ({ setSortBy }) => {
  return (
    <View style={styles.container}>
      <RepositorySort setSortBy={setSortBy} />
    </View>
  );
};

export default RepositoryFilterOptions;
