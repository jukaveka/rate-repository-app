import { StyleSheet, View } from "react-native";
import ReviewFormContainer from "./ReviewFormContainer";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.colors.background,
    width: "100%",
    height: "100%",
  },
});

const ReviewForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <ReviewFormContainer onSubmit={onSubmit} />
    </View>
  );
};

export default ReviewForm;
