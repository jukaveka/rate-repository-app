import { StyleSheet, View } from "react-native";
import Stat from "./Stat";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
});

const RepositoryItemStats = ({ item }) => {
  return (
    <View style={styles.container}>
      <Stat value={item.stargazersCount} label="Stars" />
      <Stat value={item.forksCount} label="Forks" />
      <Stat value={item.reviewCount} label="Reviews" />
      <Stat value={item.ratingAverage} label="Rating" />
    </View>
  );
};

export default RepositoryItemStats;
