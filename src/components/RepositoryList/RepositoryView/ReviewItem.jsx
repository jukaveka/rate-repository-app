import { StyleSheet, View } from "react-native";

import ReviewRating from "./ReviewRating";
import ReviewDetails from "./ReviewDetails";
import ReviewText from "./ReviewText";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: "95%",
    marginHorizontal: "2.5%",
    marginTop: "4%",
  },
});

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View style={styles.container}>
      <ReviewRating rating={review.rating} />
      <ReviewDetails review={review} />
      <ReviewText text={review.text} />
    </View>
  );
};

export default ReviewItem;
