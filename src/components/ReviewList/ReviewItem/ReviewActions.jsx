import { StyleSheet, View } from "react-native";

import useDeleteReview from "../../../hooks/useDeleteReview";

import DeleteButton from "../../Buttons/DeleteButton";
import OpenButton from "../../Buttons/OpenButton";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ReviewActions = ({ review, refetch }) => {
  const { deleteReview } = useDeleteReview();

  const handleDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <OpenButton route={`/${review.repository.id}`} />
      <DeleteButton handleDelete={async () => await handleDelete(review.id)} />
    </View>
  );
};

export default ReviewActions;
