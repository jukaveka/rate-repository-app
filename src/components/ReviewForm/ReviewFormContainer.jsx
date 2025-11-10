import { useFormik } from "formik";
import { Button, Pressable, StyleSheet, TextInput, View } from "react-native";
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
  reviewRating: 50,
  reviewText: "",
};

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string("Repository owner must be string")
    .required("Repository owner is required for submission"),
  repositoryName: yup
    .string("Repository name must be string")
    .required("Repository name is required for submission"),
  reviewRating: yup
    .number("Rating must be a number between 0 and 100")
    .min(0, "Rating can not be number below 0")
    .max(100, "Rating can not be number above 100")
    .required("Rating is required for submission"),
  reviewText: yup.string().optional(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  const formik = useFormik({ initialValues, onSubmit });

  return (
    <View style={styles.container}>
      <Text style={styles.label} fontWeight="subheading">
        Repository
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Name of the repository you want to review"
        value={formik.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
      />

      <Text style={styles.label} fontWeight="subheading">
        Owner
      </Text>
      <TextInput
        style={styles.field}
        placeholder="GitHub account of the repository owner"
        value={formik.repositoryOwner}
        onChangeText={formik.handleChange("repositoryOwner")}
      />

      <Text style={styles.label} fontWeight="subheading">
        Rating
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Rating you'd give to this repository?"
        value={formik.reviewRating}
        onChangeText={formik.handleChange("reviewRating")}
      />

      <Text style={styles.label} fontWeight="subheading">
        Review
      </Text>
      <TextInput
        style={styles.field}
        placeholder="Write a review on why you've chosen the rating above."
        value={formik.repositoryName}
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
