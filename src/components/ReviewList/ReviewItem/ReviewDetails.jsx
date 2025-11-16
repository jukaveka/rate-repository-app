import { StyleSheet, View } from "react-native";

import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "80%",
    padding: "5%",
    justifyContent: "space-evenly",
  },
});

const parseReviewDate = (date) => {
  const dateObject = new Date(date);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  return `${day}.${month}.${year}`;
};

const ReviewDetails = ({ review }) => {
  const parsedDate = parseReviewDate(review.createdAt);

  return (
    <View style={styles.container}>
      <Text fontSize="subheading">{review.user.username}</Text>
      <Text>{parsedDate}</Text>
    </View>
  );
};

export default ReviewDetails;
