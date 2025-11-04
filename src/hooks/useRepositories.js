import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries/repositoryQueries";

const useReporitories = () => {
  const [repositories, setReporitories] = useState();

  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const handleResult = () => {
    if (data) {
      setReporitories(data.repositories);
    }
  };

  useEffect(() => {
    handleResult();
  }, [data]);

  return { repositories, loading, error, refetch };
};

export default useReporitories;
