import { gql } from "@apollo/client";

export const REPOSITORY_REVIEW_FRAGMENT = gql`
  fragment repositoryReviewFragment on Review {
    id
    createdAt
    rating
    text
    user {
      id
      username
    }
  }
`;

export const USER_REVIEW_FRAGMENT = gql`
  fragment userReviewFragment on Review {
    id
    createdAt
    rating
    text
    repository {
      id
      fullName
    }
  }
`;
