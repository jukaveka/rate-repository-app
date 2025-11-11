import { useFormik } from "formik";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import * as yup from "yup";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    margin: "5%",
    backgroundColor: "white",
    padding: "5%",
    alignItems: "center",
  },
  label: {
    marginTop: "5%",
    alignSelf: "flex-start",
    marginStart: "5%",
  },
  field: {
    marginTop: "1%",
    width: "90%",
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "gray",
  },
  error: {
    alignSelf: "flex-start",
    marginStart: "5%",
  },
  button: {
    backgroundColor: theme.colors.button,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
    marginVertical: "5%",
  },
});

const initialValues = {
  repositoryOwner: "",
  repositoryName: "",
  reviewRating: 0,
  reviewText: "",
};

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string("Repository owner must be string")
    .required("Repository owner is required"),
  repositoryName: yup
    .string("Repository name must be string")
    .required("Repository name is required"),
  reviewRating: yup
    .number("Rating must be a number between 0 and 100")
    .min(0, "Rating can not be a number below 0")
    .max(100, "Rating can not be a number above 100")
    .required("Rating is required"),
  reviewText: yup.string().optional(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <View style={styles.container}>
      <Text fontSize="heading">Create repository review</Text>

      <Text style={styles.label} fontSize="subheading">
        Repository
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Repository name"
        value={formik.repositoryName}
        onBlur={formik.handleBlur("repositoryName")}
        onChangeText={formik.handleChange("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.error} color="error">
          {formik.errors.repositoryName}
        </Text>
      )}

      <Text style={styles.label} fontSize="subheading">
        Owner
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Repository owner"
        value={formik.repositoryOwner}
        onBlur={formik.handleBlur("repositoryOwner")}
        onChangeText={formik.handleChange("repositoryOwner")}
      />
      {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
        <Text style={styles.error} color="error">
          {formik.errors.repositoryOwner}
        </Text>
      )}

      <Text style={styles.label} fontSize="subheading">
        Rating
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Your rating (between 0 and 100)"
        value={formik.reviewRating}
        onBlur={formik.handleBlur("reviewRating")}
        onChangeText={formik.handleChange("reviewRating")}
      />
      {formik.touched.reviewRating && formik.errors.reviewRating && (
        <Text style={styles.error} color="error">
          {formik.errors.reviewRating}
        </Text>
      )}

      <Text style={styles.label} fontSize="subheading">
        Review
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Describe your reason behind the given rating and use cases"
        value={formik.reviewText}
        multiline
        numberOfLines={5}
        onChangeText={formik.handleChange("reviewText")}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="light" fontWeight="bold" fontSize="subheading">
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewFormContainer;
