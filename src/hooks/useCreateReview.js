import { useMutation } from "@apollo/client/react";

import { CREATE_REVIEW } from "../graphql/mutations/reviewMutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (repositoryName, ownerName, rating, text) => {
    const review = { repositoryName, ownerName, rating, text };

    const data = await mutate({ variables: { review } });

    if (data) {
      return data;
    }
  };

  return [createReview, result];
};

export default useCreateReview;
