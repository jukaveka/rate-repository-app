import { useParams } from "react-router-native";

import useRepository from "../../hooks/useRepository";

import RepositoryItem from "./RepositoryItem";
import Text from "../Text";

const RepositoryView = () => {
  const params = useParams();
  const repositoryId = params.id;

  const { repository, loading, error } = useRepository(repositoryId);

  console.log(repository, loading, error);

  if (loading) {
    return <Text> Loading repository </Text>;
  }

  if (error) {
    return <Text> There was issue with fetching repository </Text>;
  }

  if (repository) {
    return <RepositoryItem item={repository} />;
  }
};

export default RepositoryView;
