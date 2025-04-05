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

export default function SignupPage() {
    const { register } = userStore();
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("As senhas não coincidem!");
            return;
        }

        setIsLoading(true);

        try {
            const success = await register(name, email, password);
            if (success) {
                toast.success("Conta criada com sucesso!");
                router.push("/login");
            } else {
                toast.error("Erro ao cadastrar. Tente novamente.");
            }
        } catch (error) {
            toast.error("Erro inesperado. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
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
                        <h1 className="mt-6 text-3xl font-bold">Crie sua conta</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Comece a organizar suas tarefas hoje mesmo</p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="João Silva"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
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
                                    <Label htmlFor="password">Senha</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <p className="text-xs text-muted-foreground">Mínimo de 8 caracteres com letras, números e símbolos</p>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                                    <Input
                                        id="confirm-password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-start space-x-2">
                                    <Checkbox id="terms" className="mt-1" required />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Eu concordo com os{" "}
                                        <Link href="/termos" className="text-primary hover:underline">
                                            Termos de Serviço
                                        </Link>{" "}
                                        e{" "}
                                        <Link href="/privacidade" className="text-primary hover:underline">
                                            Política de Privacidade
                                        </Link>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Criando...
                                        </>
                                    ) : (
                                        "Criar Conta"
                                    )}
                                </Button>
                            </div>
                        </form>
                        <div className="text-center text-sm">
                            <p className="text-muted-foreground">
                                Já tem uma conta?{" "}
                                <Link href="/login" className="font-medium text-primary hover:underline">
                                    Faça login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-6 border-t">
                <div className="container flex flex-col items-center justify-center gap-2 text-center">
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
    );
}
