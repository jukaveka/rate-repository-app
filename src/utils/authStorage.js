import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    );

    return accessToken ? JSON.parse(accessToken) : null;
  }

  async setAccessToken(accessToken) {
    const existingToken = await this.getAccessToken();

    if (existingToken) {
      await this.removeAccessToken();
    }

    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
