import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/mutations/reviewMutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (deleteReviewId) => {
    const variables = { deleteReviewId };
    await mutate({ variables: variables });
  };

  return { deleteReview, result };
};

export default useDeleteReview;
