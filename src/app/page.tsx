import Link from "next/link"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthRedirect from "@/components/AuthRedirect"

export default function LandingPage() {
  return (
    <>
      <AuthRedirect />
      <div className="flex min-h-screen w-full flex-col bg-background" suppressHydrationWarning>
        <header className="w-full border-b border-border bg-background">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Doable</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
                Entrar
              </Link>
              <Button asChild size="sm">
                <Link href="/signup">Começar Grátis</Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="w-full py-20 text-center">
            <div className="mx-auto max-w-2xl px-4 md:px-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium">
                <Rocket className="h-4 w-4" />
                <span>Organize suas tarefas</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Simplifique sua rotina com <span className="text-primary">Doable</span>
              </h1>
              <p className="mt-6 text-base leading-normal text-muted-foreground sm:text-lg">
                Um jeito simples e intuitivo de gerenciar suas tarefas.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/signup">Começar Grátis</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-border bg-muted">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Doable. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </>
  )
}
