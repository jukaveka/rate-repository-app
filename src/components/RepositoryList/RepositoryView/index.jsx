import { View } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../../../hooks/useRepository";

import Text from "../../Text";
import RepositoryItem from "../RepositoryItem";
import ReviewList from "./ReviewList";

const RepositoryView = () => {
  const params = useParams();
  const repositoryId = params.id;

  const { repository, loading, error } = useRepository(repositoryId);

  if (loading) {
    return <Text> Loading repository </Text>;
  }

  if (error) {
    return <Text> There was issue with fetching repository </Text>;
  }

  if (repository) {
    return (
      <View>
        <RepositoryItem item={repository} />
        <ReviewList reviews={repository.reviews} />
      </View>
    );
  }
};

export default RepositoryView;
