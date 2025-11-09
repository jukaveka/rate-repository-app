import { StyleSheet, View } from "react-native";

import ReviewRating from "./ReviewRating";
import ReviewDetails from "./ReviewDetails";
import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
  },
});

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View style={styles.container}>
      <ReviewRating rating={review.rating} />
      <ReviewDetails review={review} />
      <Text> {review.Text} </Text>
    </View>
  );
};

export default ReviewItem;
