export const API_URL = "http://localhost:19003/api";

export const registerUser = async (name: string, email: string, password: string) => {
    const res = await fetch(`${API_URL}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    return res.json();
};

export const loginUser = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    return res.json();
};