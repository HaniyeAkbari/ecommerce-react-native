import { useLocalStorage } from "@/hooks/useLocalStorage";
import { create } from "zustand";

type TAuthStore = {
  accessToken?: string;
  setAccessToken: (token?: string) => void;
};

export const useAuthStore = create<TAuthStore>((set) => {
  const { getValue, saveItem } = useLocalStorage();
  return {
    accessToken: "hhhhh",
    setAccessToken: async (token) => {
      const accessTkn = await getValue("accessToken");
      if (accessTkn) {
        set({ accessToken: accessTkn });
        return;
      } else if (token) {
        set({ accessToken: token });
        await saveItem("accessToken", token);
        return;
      }
      set({ accessToken: undefined });
    },
  };
});
