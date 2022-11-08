import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStore {
  public async saveUrl(url: string) {
    try {
      await AsyncStorage.setItem("url", url);
    } catch (e) {
      console.error("Saving url failed", e);
    }
  }

  public async readUrl() {
    try {
      const value = await AsyncStorage.getItem("url");
      return value;
    } catch (e) {
      console.error("Reading url failed", e);
    }
  }

  public async resetUrl() {
    try {
      await AsyncStorage.removeItem("url");
    } catch (e) {
      console.error("Resetting url failed", e);
    }
  }
}

export const localStore = new LocalStore();
