import { Button, StyleSheet, View, TextInput } from "react-native";

import { useFormik } from "formik";

import * as yup from "yup";

import theme from "../theme";

import useSignIn from "../hooks/useSignIn";

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
    marginTop: 20,
    width: 200,
  },
  error: {
    margintop: 5,
    marginBottom: 10,
    width: 200,
  },
  field: {
    marginTop: 5,
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username needs to be at least 3 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password needs to be at least 8 characters long")
    .required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
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
          onBlur={formik.handleBlur("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.error} color="error">
            {formik.errors.username}
          </Text>
        )}

        <Text style={styles.label}> Password </Text>
        <TextInput
          style={styles.field}
          placeholder="abcd1234"
          secureTextEntry
          error
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error} color="error">
            {formik.errors.password}
          </Text>
        )}

        <View style={styles.button}>
          {formik.isValid ? (
            <Button
              title="Sign in"
              color={theme.colors.highlight}
              onPress={formik.handleSubmit}
            />
          ) : (
            <Button title="Sign in" disabled color={theme.colors.highlight} />
          )}
        </View>
      </View>
    </View>
  );
};

export default SignIn;
