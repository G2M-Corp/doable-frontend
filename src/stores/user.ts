import { create } from 'zustand';

type User = {
    id: number;
    name: string;
    email: string;
} | null;

type UserStore = {
    user: User;
    setUser: (user: User) => void;
    logout: () => void;
};

export const userStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    logout: () => set({ user: null })
}));