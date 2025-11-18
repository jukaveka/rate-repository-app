import { useQuery } from "@apollo/client/react";
import { CURRENT_USER } from "../graphql/queries/authenticationQueries";

const useCurrentUser = (includeReviews) => {
  const variables = includeReviews ? { includeReviews } : {};

  const { data, loading, error, refetch } = useQuery(CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: variables,
  });

  return { data, loading, error, refetch };
};

export default useCurrentUser;
