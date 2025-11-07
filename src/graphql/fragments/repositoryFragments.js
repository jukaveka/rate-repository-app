import { gql } from "@apollo/client";

export const REPOSITORY_FRAGMENT = gql`
  fragment repositoryFragment on Repository {
    id
    fullName
    description
    language
    forksCount
    reviewCount
    stargazersCount
    ratingAverage
    ownerName
    ownerAvatarUrl
  }
`;
