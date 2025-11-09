import { gql } from "@apollo/client";

import { REPOSITORY_FRAGMENT } from "../fragments/repositoryFragments";
import { REVIEW_FRAGMENT } from "../fragments/reviewFragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryFragment
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryFragment
      url
      reviews {
        edges {
          node {
            ...reviewFragment
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
  ${REVIEW_FRAGMENT}
`;
