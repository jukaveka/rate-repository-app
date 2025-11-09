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

const ReviewRating = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Rating ratingLevel={5}> {rating} </Rating>
    </View>
  );
};

export default ReviewRating;
