import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import AuthRedirect from "@/components/AuthRedirect";

export default function LandingPage() {
  return (
    <>
    <AuthRedirect />
    <div className="flex min-h-screen w-full flex-col bg-background" suppressHydrationWarning >
      <header className="w-full border-b border-border bg-background">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Doable</span>
          </div>
          <div className="flex items-center gap-4">
          <Link href="#recursos" className="text-sm font-medium transition-colors hover:text-primary">
              Recursos
            </Link>
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
              Entrar
            </Link>
            <Button asChild size="sm">
              <Link href="/signup">Começar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center md:px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium">
              <Rocket className="h-4 w-4" />
              <span>Organize suas tarefas com facilidade</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Simplifique sua vida com <span className="text-primary">Doable</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[42rem] text-base leading-normal text-muted-foreground sm:text-lg">
              Gerencie suas tarefas de forma eficiente, acompanhe seu progresso e aumente sua produtividade com nossa
              plataforma intuitiva.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/signup">Experimente</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-12 md:py-24" id="recursos">
          <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Recursos que transformam sua produtividade
              </h2>
              <p className="mx-auto mt-4 max-w-[85%] text-base text-muted-foreground sm:text-lg">
                Doable oferece tudo que você precisa para organizar suas tarefas e aumentar sua eficiência no dia a dia.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Listas Inteligentes</h3>
                  <p className="text-sm text-muted-foreground">
                    Organize suas tarefas em listas personalizadas com categorias e prioridades.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Lembretes e Prazos</h3>
                  <p className="text-sm text-muted-foreground">
                    Defina prazos e receba lembretes para nunca mais perder uma data importante.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Sincronização Segura</h3>
                  <p className="text-sm text-muted-foreground">
                    Acesse suas tarefas em qualquer dispositivo com sincronização em tempo real.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Colaboração em Equipe</h3>
                  <p className="text-sm text-muted-foreground">
                    Compartilhe listas e delegue tarefas para trabalhar em equipe de forma eficiente.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Análise de Produtividade</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompanhe seu progresso com relatórios e estatísticas detalhadas.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="1"></circle>
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Integração com Apps</h3>
                  <p className="text-sm text-muted-foreground">
                    Conecte com seus aplicativos favoritos para um fluxo de trabalho contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background py-12 md:py-24">
          <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-border bg-background p-8 md:flex-row">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold">Pronto para aumentar sua produtividade?</h2>
                <p className="text-sm text-muted-foreground">
                  Comece a usar o Doable hoje mesmo e transforme a maneira como você gerencia suas tarefas.
                </p>
              </div>
              <Button size="lg" asChild className="w-full md:w-auto">
                <Link href="/signup">Começar</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border bg-muted">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Doable</span>
            </div>
            <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Produto</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#recursos" className="text-sm text-muted-foreground hover:text-foreground">
                      Recursos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Novidades
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Empresa</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Sobre nós
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Carreiras
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Recursos</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Documentação
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Guias
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Termos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Doable. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

