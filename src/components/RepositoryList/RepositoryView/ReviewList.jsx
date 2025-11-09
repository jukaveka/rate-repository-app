import { FlatList, StyleSheet, View } from "react-native";

import ReviewItem from "./ReviewItem";
import ItemSeparator from "../../ItemSeparator";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

const ReviewList = ({ reviews }) => {
  console.log(reviews);
  const reviewNodes = reviews.edges.map((edge) => edge.node);

  console.log(reviewNodes);
  return (
    <View style={styles.container}>
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default ReviewList;
