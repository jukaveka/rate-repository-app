import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { useFormik } from "formik";

import * as yup from "yup";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create(theme.forms);

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username needs to be at least 5 characters long")
    .max(30, "Username can be at most 30 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password needs to be at least 5 characters long")
    .max(50, "Password can be at most 50 characters long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password is required"),
});

const SignUpContainer = ({ onSubmit }) => {
  const formik = useFormik(initialValues, validationSchema);

  return (
    <View style={styles.container}>
      <Text fontSize="heading">Sign up</Text>

      <Text style={styles.label} fontSize="subheading">
        Username
      </Text>
      <TextInput style={styles.field} />

      <Text style={styles.label} fontSize="subheading">
        Password
      </Text>
      <TextInput style={styles.field} />

      <Text style={styles.label} fontSize="subheading">
        Confirm your password
      </Text>
      <TextInput style={styles.field} />

      <Pressable
        style={styles.button.valid}
        onPress={() => console.log("Pressed")}
      >
        <Text color="light" fontWeight="bold" fontSize="subheading">
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpContainer;
