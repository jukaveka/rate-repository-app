import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import { Button } from "react-native-paper";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  button: {
    fontSize: 30,
    color: theme.colors.button,
  },
});

const OpenButton = ({ route }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(route);
  };

  return (
    <View>
      <Button
        icon="open-in-app"
        labelStyle={styles.button}
        textColor={styles.button.color}
        onPress={handlePress}
      />
    </View>
  );
};

export default OpenButton;
