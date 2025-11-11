import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import useCreateReview from "../../hooks/useCreateReview";

import ReviewFormContainer from "./ReviewFormContainer";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.colors.background,
    width: "100%",
    height: "100%",
  },
});

const ReviewForm = () => {
  const [createReview, result] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repositoryName, repositoryOwner, reviewRating, reviewText } =
      values;

    try {
      const { data } = await createReview(
        repositoryName,
        repositoryOwner,
        Number(reviewRating),
        reviewText
      );

      navigate(`/${data.createReview.repository.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ReviewFormContainer onSubmit={onSubmit} />
    </View>
  );
};

export default ReviewForm;
