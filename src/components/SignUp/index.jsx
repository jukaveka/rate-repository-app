import SignUpContainer from "./SignUpContainer";

const SignUp = () => {
  const handleSignUp = (values) => {
    console.log(values);
  };

  return <SignUpContainer onSubmit={handleSignUp} />;
};

export default SignUp;
