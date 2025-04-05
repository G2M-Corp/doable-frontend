"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirect() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                const isExpired = payload.exp * 1000 < Date.now();

                if (!isExpired) {
                    router.push("/dashboard");
                }
            } catch (e) {
                localStorage.removeItem("token");
            }
        }
    }, []);

    return null;
}
