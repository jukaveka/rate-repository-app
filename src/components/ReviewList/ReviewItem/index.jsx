import { StyleSheet, View } from "react-native";

import ReviewRating from "./ReviewRating";
import ReviewDetails from "./ReviewDetails";
import ReviewText from "./ReviewText";
import ReviewActions from "./ReviewActions";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: "95%",
    marginHorizontal: "2.5%",
    marginTop: "4%",
    paddingBottom: "5%",
  },
});

const ReviewItem = ({ review, view, refetch }) => {
  return (
    <View style={styles.container}>
      <ReviewRating rating={review.rating} />

      <ReviewDetails review={review} view={view} />

      <ReviewText text={review.text} />

      {view === "user" ? (
        <ReviewActions review={review} refetch={refetch} />
      ) : null}
    </View>
  );
};

export default ReviewItem;
