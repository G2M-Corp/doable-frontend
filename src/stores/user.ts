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

const API_BASE_URL = "https://doable-backend-dev.onrender.com";

const fetchWithJson = async (url: string, method: string, body: Record<string, any>) => {
    const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        if (res.status === 401) {
            console.error("Unauthorized: Invalid credentials or session expired.");
            localStorage.removeItem("token");
        } else {
            console.error(`Request failed: ${res.status} ${res.statusText}`);
        }
        return null;
    }

    return res.json();
};

export const userStore = create<UserStore>((set) => ({
    user: null,

    login: async (email, password) => {
        const data = await fetchWithJson(`${API_BASE_URL}/token/`, "POST", { email, password });

        if (!data) return false;

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
        const userData = { name, email, password };
        const res = await fetchWithJson(`${API_BASE_URL}/api/usuarios/`, "POST", userData);

        return !!res;
    },

    logout: () => {
        set({ user: null });
        localStorage.removeItem("token");
    },
}));