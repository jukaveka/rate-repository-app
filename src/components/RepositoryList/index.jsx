import useReporitories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useReporitories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
