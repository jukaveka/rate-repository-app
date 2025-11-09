import { gql } from "@apollo/client";

export const REVIEW_FRAGMENT = gql`
  fragment reviewFragment on Review {
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
