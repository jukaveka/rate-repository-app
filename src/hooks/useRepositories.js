import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries/repositoryQueries";

const useReporitories = (sortBy, search) => {
  const [repositories, setRepositories] = useState();

  let variables = {};

  variables.first = 10;

  if (sortBy) {
    variables.orderBy = sortBy.type;
    variables.orderDirection = sortBy.direction;
  }

  if (search) {
    variables.searchKeyword = search;
  }

  const { loading, error, data, refetch, fetchMore } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables: variables,
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const handleResult = () => {
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    handleResult();
  }, [data]);

  return { repositories, loading, error, refetch, fetchMore: handleFetchMore };
};

export default useReporitories;
