"use client";

import { useState } from "react";
import { userStore } from "@/stores/user";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, Loader2 } from "lucide-react";
import { toast } from "sonner";
import AuthRedirect from "@/components/AuthRedirect";

export default function LoginPage() {
    const { login } = userStore();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await login(email, password);
            if (success) {
                toast.success("Login realizado com sucesso!");
                router.push("/dashboard");
            } else {
                toast.error("Email ou senha inválidos.");
            }
            // eslint-disable-next-line
        } catch (error) {
            toast.error("Erro ao fazer login. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
        <AuthRedirect />
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Link href="/" className="flex items-center gap-2">
                                <Rocket className="h-8 w-8 text-primary" />
                                <span className="text-2xl font-bold">Doable</span>
                            </Link>
                        </div>
                        <h1 className="mt-6 text-3xl font-bold">Bem-vindo de volta</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Entre na sua conta para continuar</p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Senha</Label>
                                        <Link href="/recuperar-senha" className="text-sm font-medium text-primary hover:underline">
                                            Esqueceu a senha?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Lembrar de mim
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Entrando...
                                        </>
                                    ) : (
                                        "Entrar"
                                    )}
                                </Button>
                            </div>
                        </form>
                        <div className="text-center text-sm">
                            <p className="text-muted-foreground">
                                Não tem uma conta?{" "}
                                <Link href="/signup" className="font-medium text-primary hover:underline">
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-6 border-t">
                <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Doable. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/termos" className="text-xs text-muted-foreground hover:underline">
                            Termos de Uso
                        </Link>
                        <Link href="/privacidade" className="text-xs text-muted-foreground hover:underline">
                            Política de Privacidade
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
        </>
    );
}
