import { StyleSheet, View } from "react-native";

import { Navigate, Route, Routes } from "react-router-native";

import RepositoryList from "./RepositoryList";
import RepositoryView from "./RepositoryList/RepositoryView";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: "100%",
    width: "100%",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<RepositoryView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
