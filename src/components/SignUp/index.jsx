import { useNavigate } from "react-router-native";

import useSignIn from "../../hooks/useSignIn";
import useSignUp from "../../hooks/useSignUp";

import SignUpContainer from "./SignUpContainer";

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSignUp = async (values) => {
    const { username, password } = values;

    try {
      await signUp(username, password);
      await signIn(username, password);
      navigate("/");
    } catch (error) {
      console.log(
        "There was an issue while signing up new user. Error:",
        error
      );
    }
  };

  return <SignUpContainer onSubmit={handleSignUp} />;
};

export default SignUp;
