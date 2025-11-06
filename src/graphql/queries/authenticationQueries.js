import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
