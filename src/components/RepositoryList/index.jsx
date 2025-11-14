import { useState } from "react";
import { useNavigate } from "react-router-native";

import useRepositories from "../../hooks/useRepositories";

import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState({
    type: "CREATED_AT",
    direction: "DESC",
  });

  const { repositories } = useRepositories(sortBy);

  const navigate = useNavigate();

  const handlePress = (id) => {
    navigate(`/${id}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      handlePress={handlePress}
      setSortBy={setSortBy}
    />
  );
};

export default RepositoryList;
