import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Rocket } from "lucide-react"

export default function LoginPage() {
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
                        <h1 className="mt-6 text-3xl font-bold">Bem-vindo de volta</h1>
                        <p className="mt-2 text-sm text-muted-foreground">Entre na sua conta para continuar</p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <form className="space-y-6" action="#" method="POST">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="seu@email.com"
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
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="••••••••"
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
                                <Button type="submit" className="w-full">
                                    Entrar
                                </Button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                    <path fill="none" d="M1 1h22v22H1z" />
                                </svg>
                                Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                                    <path
                                        fill="currentColor"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                                    />
                                </svg>
                                GitHub
                            </Button>
                        </div>
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
    )
}

