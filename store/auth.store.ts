import { create } from "zustand";

type TAuthStore = {
  accessToken?: string;
  setAccessToken: (token?: string) => void;
};

export const useAuthStore = create<TAuthStore>((set) => ({
  accessToken: "kndkndhnf",
  setAccessToken: (token) => set({ accessToken: token }),
}));
