import { StyleSheet, View } from "react-native";

import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "70%",
    padding: "5%",
    justifyContent: "space-evenly",
  },
});

const parseReviewTitle = (review, view) => {
  return view === "user" ? review.repository.fullName : review.user.username;
};

const parseReviewDate = (date) => {
  const dateObject = new Date(date);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  return `${day}.${month}.${year}`;
};

const ReviewDetails = ({ review, view }) => {
  const parsedTitle = parseReviewTitle(review, view);
  const parsedDate = parseReviewDate(review.createdAt);

  return (
    <View style={styles.container}>
      <Text fontSize="subheading">{parsedTitle}</Text>
      <Text>{parsedDate}</Text>
    </View>
  );
};

export default ReviewDetails;
