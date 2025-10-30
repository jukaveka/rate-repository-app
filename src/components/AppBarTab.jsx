import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  item: {
    paddingBottom: 20,
    paddingStart: 10,
  },
});

const AppBarTab = ({ label, route }) => {
  return (
    <>
      <Pressable>
        <Link to={route}>
          <Text style={styles.item} color="light" fontSize="subheading">
            {label}
          </Text>
        </Link>
      </Pressable>
    </>
  );
};

export default AppBarTab;
