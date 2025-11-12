import { StyleSheet, View, TextInput, Pressable } from "react-native";

import { useFormik } from "formik";

import * as yup from "yup";

import Text from "../../Text";

import theme from "../../../theme";

const styles = StyleSheet.create(theme.forms);

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username needs to be at least 5 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password needs to be at least 5 characters long")
    .required("Password is required"),
});

const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text fontSize="heading">Log in</Text>

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
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error} color="error">
          {formik.errors.password}
        </Text>
      )}

      {formik.isValid ? (
        <Pressable style={styles.button.valid} onPress={formik.handleSubmit}>
          <Text color="light" fontWeight="bold" fontSize="subheading">
            Sign in
          </Text>
        </Pressable>
      ) : (
        <Pressable style={styles.button.disabled} disabled>
          <Text color="textPrimary" fontWeight="bold" fontSize="subheading">
            Sign in
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default SignInContainer;
