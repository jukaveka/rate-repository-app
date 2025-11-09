import { FlatList, View } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../../../hooks/useRepository";

import Text from "../../Text";
import RepositoryItem from "../RepositoryItem";
import ReviewItem from "./ReviewItem";

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
      <View>
        <FlatList
          data={reviewNodes}
          ListHeaderComponent={<RepositoryItem item={repository} />}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
        />
      </View>
    );
  }
};

export default RepositoryView;
