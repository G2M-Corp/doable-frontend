import { create } from "zustand";

type User = {
    id: number;
    name: string;
    email: string;
    accessToken: string;
} | null;

type UserStore = {
    user: User;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
};

export const userStore = create<UserStore>((set) => ({
    user: null,

    login: async (email, password) => {
        const res = await fetch("https://doable-backend-dev.onrender.com/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) return false;
        const data = await res.json();

        set({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                accessToken: data.access,
            },
        });

        localStorage.setItem("token", data.access);
        return true;
    },

    register: async (name, email, password) => {
        const userData: Record<string, any> = { name, email, password };

        const res = await fetch("https://doable-backend-dev.onrender.com/api/usuarios/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        return res.ok;
    },

    logout: () => {
        set({ user: null });
        localStorage.removeItem("token");
    },
}));