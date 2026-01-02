import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "../types/Auth.type";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      login: (user) => set({ user, isLoggedIn: true }),

      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);
