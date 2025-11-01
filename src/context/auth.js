import { create } from "zustand";
import { clearTokens, setTokens } from "@/utils/token";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create()(
  persist(
    (set, _get) => ({
      auth: false,
      login: ({ access_token, refresh_token }) => {
        set({ auth: true });
        setTokens({ access_token, refresh_token });
      },
      logout: () => {
        set({ auth: false });
        clearTokens();
      },
    }),
    {
      name: "Madaniyat-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
