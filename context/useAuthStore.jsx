import { create } from "zustand"

export const useAuthStore = create((set) => ({
  user: null,
  login: (name) => set((state) => ({ user: name })),
  logout: () => set((state) => ({ user: null })),
}))
