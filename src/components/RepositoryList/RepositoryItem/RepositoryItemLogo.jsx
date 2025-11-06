import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

const RepositoryItemLogo = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: imageUrl }} />
    </View>
  );
};

export default RepositoryItemLogo;
