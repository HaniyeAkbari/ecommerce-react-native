import { create } from "zustand";

type TThemeStore = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const useThemeStore = create<TThemeStore>((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));
