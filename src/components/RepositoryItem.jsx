import { Text, View } from "react-native";

const RepositoryItem = (props) => {
  const item = props;
  console.log(item);
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
