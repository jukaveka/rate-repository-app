import { Alert, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import theme from "../../theme";

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    color: theme.colors.textError,
  },
});

const DeleteButton = ({ handleDelete }) => {
  const cancelDeleteButton = {
    text: "Cancel",
    onPress: () => console.log("Deletion cancelled"),
    style: "cancel",
  };

  const confirmDeleteButton = {
    text: "Ok",
    onPress: handleDelete,
  };

  const handlePress = () => {
    Alert.alert(
      "Delete review",
      `Are you sure you want to the delete this item?`,
      [cancelDeleteButton, confirmDeleteButton]
    );
  };

  return (
    <View>
      <Button
        icon="delete"
        labelStyle={styles.button}
        textColor={styles.button.color}
        onPress={handlePress}
      />
    </View>
  );
};

export default DeleteButton;
