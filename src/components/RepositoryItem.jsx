import { View } from "react-native";
import Text from "./Text";

const RepositoryItem = (props) => {
  const item = props;
  return (
    <View>
      <Text> Name - {item.item.fullName}</Text>
      <Text> Description - {item.item.description}</Text>
      <Text> Language - {item.item.language} </Text>
      <Text> Stars - {item.item.stargazersCount} </Text>
      <Text> Forks - {item.item.forksCount} </Text>
      <Text> Reviews - {item.item.reviewCount} </Text>
      <Text> Rating - {item.item.ratingAverage} </Text>
    </View>
  );
};

export default RepositoryItem;
