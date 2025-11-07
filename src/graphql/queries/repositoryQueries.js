import { gql } from "@apollo/client";

import { REPOSITORY_FRAGMENT } from "../fragments/repositoryFragments";

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
    }
  }

  ${REPOSITORY_FRAGMENT}
`;
