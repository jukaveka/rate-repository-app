import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries/repositoryQueries";

const useReporitories = () => {
  const [repositories, setRepositories] = useState();

  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
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
