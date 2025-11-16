import { StyleSheet, View } from "react-native";

import Rating from "../../Rating";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "15%",
    marginTop: "5%",
    marginStart: "2%",
  },
});

const determineRatingLevel = (rating) => {
  switch (true) {
    case rating <= 100 && rating >= 80:
      return 5;
    case rating <= 79 && rating >= 60:
      return 4;
    case rating <= 59 && rating >= 40:
      return 3;
    case rating <= 39 && rating >= 20:
      return 2;
    case rating <= 19 && rating >= 0:
      return 1;
    default:
      return null;
  }
};

const ReviewRating = ({ rating }) => {
  const ratingLevel = determineRatingLevel(rating);

  return (
    <View style={styles.container}>
      <Rating ratingLevel={ratingLevel}> {rating} </Rating>
    </View>
  );
};

export default ReviewRating;
