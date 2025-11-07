import { useNavigate } from "react-router-native";
import useReporitories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useReporitories();

  const navigate = useNavigate();

  const handlePress = (id) => {
    navigate(`/${id}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      handlePress={handlePress}
    />
  );
};

export default RepositoryList;
