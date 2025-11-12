import { StyleSheet, View } from "react-native";

import { Navigate, Route, Routes } from "react-router-native";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import RepositoryView from "./RepositoryList/RepositoryView";
import ReviewForm from "./ReviewForm";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
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
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
