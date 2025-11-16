import { FlatList, StyleSheet, View } from "react-native";

import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  footer: {
    marginBottom: 75,
  },
});

const ReviewList = ({ reviews, headerComponent }) => {
  return (
    <FlatList
      data={reviews}
      ListHeaderComponent={headerComponent}
      ListFooterComponent={<View style={styles.footer} />}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default ReviewList;
