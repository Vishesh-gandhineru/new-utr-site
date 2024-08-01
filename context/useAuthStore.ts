import {create} from 'zustand';
import { getAcessToken } from '@/serverAction/authAPI';

type AuthStore = {
    userAuth: boolean;
    loading: boolean;
    user: any;
    checkAuth: () => Promise<void>;
    logout: () => void;
    };


const useAuthStore = create<AuthStore>((set) => ({
  userAuth: false,
  loading: true,
  user: null,
  checkAuth: async () => {
    try {
      const response = await getAcessToken();
      set({ userAuth: true, user: response?.value });
    } catch (error) {
      set({ userAuth: false });
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    set({ userAuth: false, user: null });
    // Optionally, make a request to log out server-side and clear cookies
  },
}));

export default useAuthStore;