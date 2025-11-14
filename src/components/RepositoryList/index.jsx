import { useState } from "react";
import { useNavigate } from "react-router-native";

import useRepositories from "../../hooks/useRepositories";

import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({
    type: "CREATED_AT",
    direction: "DESC",
  });
  const [debouncedSearch] = useDebounce(search, 500);

  const { repositories } = useRepositories(sortBy, debouncedSearch);

  const navigate = useNavigate();

  const handlePress = (id) => {
    navigate(`/${id}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      handlePress={handlePress}
      setSortBy={setSortBy}
      search={search}
      setSearch={setSearch}
    />
  );
};

export default RepositoryList;
