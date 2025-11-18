import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORY } from "../graphql/queries/repositoryQueries";

const useRepository = (repositoryId) => {
  const [repository, setRepository] = useState();

  const variables = {
    repositoryId,
    first: 5,
  };

  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    return fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const handleResult = () => {
    if (data) {
      setRepository(data.repository);
    }
  };

  useEffect(() => {
    handleResult();
  }, [data]);

  return { repository, loading, error, fetchMore: handleFetchMore };
};

export default useRepository;
