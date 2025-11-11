import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation addReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        id
      }
    }
  }
`;
