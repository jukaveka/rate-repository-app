import { Button, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";

import { useFormik } from "formik";

import theme from "../theme";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 50,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    margin: 25,
  },
  form: {
    marginBottom: 50,
  },
  label: {
    marginVertical: 10,
    width: 200,
  },
  field: {
    marginVertical: 10,
    width: 250,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.primary,
  },
  button: {
    marginTop: 20,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading} fontSize="heading">
        Log in
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}> Username </Text>
        <TextInput
          style={styles.field}
          placeholder="matti.meikalainen@gmail.com"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />

        <Text style={styles.label}> Password </Text>
        <TextInput
          style={styles.field}
          placeholder="abcd1234"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
        />

        <View style={styles.button}>
          <Button
            title="Sign in"
            color={theme.colors.highlight}
            onPress={formik.handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
