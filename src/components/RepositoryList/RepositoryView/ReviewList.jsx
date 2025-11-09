import { FlatList } from "react-native";

import ReviewItem from "./ReviewItem";
import ItemSeparator from "../../ItemSeparator";

const ReviewList = ({ reviews }) => {
  console.log(reviews);
  const reviewNodes = reviews.edges.map((edge) => edge.node);

  console.log(reviewNodes);
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default ReviewList;
