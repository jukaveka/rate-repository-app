import { gql } from "@apollo/client";

import {
  PAGINATION_FRAGMENT,
  REPOSITORY_FRAGMENT,
} from "../fragments/repositoryFragments";
import { REPOSITORY_REVIEW_FRAGMENT } from "../fragments/reviewFragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $first: Int!
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...repositoryFragment
        }
        cursor
      }
      pageInfo {
        ...paginationFragment
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
  ${PAGINATION_FRAGMENT}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...repositoryFragment
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...repositoryReviewFragment
          }
          cursor
        }
        pageInfo {
          ...paginationFragment
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
  ${REPOSITORY_REVIEW_FRAGMENT}
  ${PAGINATION_FRAGMENT}
`;
