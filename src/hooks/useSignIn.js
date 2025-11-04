import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE_USER } from "../graphql/mutations/authenticateMutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    return await mutate({ variables: { credentials } });
  };

  return [signIn, result];
};

export default useSignIn;
