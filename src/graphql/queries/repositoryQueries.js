import { gql } from "@apollo/client";

import { REPOSITORY_FRAGMENT } from "../fragments/repositoryFragments";
import { REPOSITORY_REVIEW_FRAGMENT } from "../fragments/reviewFragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
            ...repositoryReviewFragment
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
  ${REPOSITORY_REVIEW_FRAGMENT}
`;
