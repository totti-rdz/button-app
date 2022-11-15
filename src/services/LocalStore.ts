import AsyncStorage from "@react-native-async-storage/async-storage";
import { Key } from "../interfaces/localStore";

class LocalStore {
  public async save(key: Key, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(`Saving to LocalStore failed. Trying to save key ${key}. Error: ${e}`);
    }
  }

  public async read(key: Key) {
    const value = await AsyncStorage.getItem(key);
    if (value === null) console.error(`Reading value from LocalStore failed. Key: ${key}`);
    return value;
  }

  public async reset(key: Key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(`Resetting LocalStore key value failed. Trying to reset key ${key}. Error: ${e}`);
    }
  }
}

export const localStore = new LocalStore();
