import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORY } from "../graphql/queries/repositoryQueries";

const useRepository = (repositoryId) => {
  const [repository, setRepository] = useState();

  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: "cache-and-network",
  });

  const handleResult = () => {
    if (data) {
      setRepository(data.repository);
    }
  };

  useEffect(() => {
    handleResult();
  }, [data]);

  return { repository, loading, error };
};

export default useRepository;
