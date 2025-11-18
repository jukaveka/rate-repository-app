import { gql } from "@apollo/client";

import { USER_REVIEW_FRAGMENT } from "../fragments/reviewFragments";

export const CURRENT_USER = gql`
  query currentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...userReviewFragment
          }
        }
      }
    }
  }

  ${USER_REVIEW_FRAGMENT}
`;
