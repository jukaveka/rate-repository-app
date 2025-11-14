import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries/repositoryQueries";

const useReporitories = (sortBy) => {
  const [repositories, setRepositories] = useState();

  let variables = {};

  if (sortBy) {
    variables = {
      orderBy: sortBy.type,
      orderDirection: sortBy.direction,
    };
  }

  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: variables,
  });

  const handleResult = () => {
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    handleResult();
  }, [data]);

  return { repositories, loading, error, refetch };
};

export default useReporitories;
