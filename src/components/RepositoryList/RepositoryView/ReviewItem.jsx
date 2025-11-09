import { StyleSheet, View } from "react-native";

import Text from "../../Text";
import ReviewRating from "./ReviewRating";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
  },
});

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View style={styles.container}>
      <ReviewRating rating={review.rating} />
      <Text> {review.id} </Text>
      <Text> {review.createdAt} </Text>
      <Text> {review.Text} </Text>
    </View>
  );
};

export default ReviewItem;
