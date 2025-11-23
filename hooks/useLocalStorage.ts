import * as SecureStore from "expo-secure-store";

export const useLocalStorage = () => {
  async function saveItem(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValue(key: string) {
    return await SecureStore.getItemAsync(key);
  }

  async function removeItem(key: string) {
    await SecureStore.deleteItemAsync(key);
  }
  return {
    getValue,
    saveItem,
    removeItem,
  };
};
