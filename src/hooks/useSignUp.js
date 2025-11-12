import { useMutation } from "@apollo/client/react";

import { CREATE_USER } from "../graphql/mutations/userMutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async (username, password) => {
    const user = { username, password };

    return await mutate({ variables: { user } });
  };

  return [signUp, result];
};

export default useSignUp;
