import { useMutation } from "@apollo/client/react";

import useAuthStorage from "./useAuthStorage";

import { AUTHENTICATE_USER } from "../graphql/mutations/authenticateMutations";

const useSignIn = () => {
  const authStorage = useAuthStorage();

  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    const { data } = await mutate({ variables: { credentials } });

    if (data) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
    }
  };

  return [signIn, result];
};

export default useSignIn;
