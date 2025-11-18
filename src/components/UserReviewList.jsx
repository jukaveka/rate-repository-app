import useCurrentUser from "../hooks/useCurrentUser";

import ReviewList from "./ReviewList";
import Text from "./Text";

const UserReviewList = () => {
  const { data, loading, error, refetch } = useCurrentUser(true);

  if (loading) {
    return <Text>Loading reviews</Text>;
  }

  if (error) {
    return <Text>There was an issue loading reviews</Text>;
  }

  const reviewNodes = data.me.reviews.edges.map((edge) => edge.node);

  return <ReviewList reviews={reviewNodes} view="user" refetch={refetch} />;
};

export default UserReviewList;
