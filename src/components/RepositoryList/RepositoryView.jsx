import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useParams } from "react-router-native";

import useRepository from "../../hooks/useRepository";

import Text from "../Text";
import RepositoryItem from "./RepositoryItem";
import ReviewList from "../ReviewList";

const styles = StyleSheet.create({
  footer: {
    marginBottom: "10%",
  },
});

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
    const reviewNodes = repository.reviews.edges.map((edge) => edge.node);

    console.log(reviewNodes);
    return (
      <SafeAreaView>
        <ReviewList
          reviews={reviewNodes}
          headerComponent={<RepositoryItem item={repository} />}
        />
      </SafeAreaView>
    );
  }
};

export default RepositoryView;
