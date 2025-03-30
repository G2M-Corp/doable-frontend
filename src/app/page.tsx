import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="w-full border-b border-border bg-background">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Doable</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#recursos" className="text-sm font-medium transition-colors hover:text-primary">
              Recursos
            </Link>
            <Link href="#precos" className="text-sm font-medium transition-colors hover:text-primary">
              Preços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium transition-colors hover:text-primary">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
              Entrar
            </Link>
            <Button asChild size="sm">
              <Link href="/cadastro">Começar Grátis</Link>
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
                <Link href="/cadastro">Experimente Grátis</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full bg-background py-12 md:py-24" id="recursos">
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

        <section className="w-full bg-background py-12 md:py-24" id="precos">
          <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Planos simples e transparentes
              </h2>
              <p className="mx-auto mt-4 max-w-[85%] text-base text-muted-foreground sm:text-lg">
                Escolha o plano ideal para suas necessidades e comece a organizar sua vida hoje mesmo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-2xl font-bold">Gratuito</h3>
                  <div className="mt-4 text-4xl font-bold">
                    R$ 0<span className="text-base font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Perfeito para começar a organizar suas tarefas.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Até 3 listas</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Até 30 tarefas</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Lembretes básicos</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6 w-full" variant="outline">
                  Começar Grátis
                </Button>
              </div>
              <div className="relative flex h-full flex-col justify-between rounded-lg border border-border bg-background p-6 shadow-sm">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Pessoal</h3>
                  <div className="mt-4 text-4xl font-bold">
                    R$ 19<span className="text-base font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Ideal para uso pessoal com recursos avançados.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Listas ilimitadas</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Tarefas ilimitadas</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Lembretes avançados</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Sincronização em todos dispositivos</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6 w-full">Assinar Agora</Button>
              </div>
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-2xl font-bold">Equipe</h3>
                  <div className="mt-4 text-4xl font-bold">
                    R$ 49<span className="text-base font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Para equipes que precisam colaborar em projetos.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Tudo do plano Pessoal</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Até 10 membros</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Colaboração em tempo real</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Controle de permissões</span>
                    </li>
                    <li className="flex items-center">
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
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Relatórios avançados</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6 w-full" variant="outline">
                  Fale com Vendas
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background py-12 md:py-24" id="depoimentos">
          <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">O que nossos clientes dizem</h2>
              <p className="mx-auto mt-4 max-w-[85%] text-base text-muted-foreground sm:text-lg">
                Milhares de pessoas já transformaram sua produtividade com o Doable.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-muted p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">MC</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Maria Costa</h4>
                    <p className="text-sm text-muted-foreground">Empreendedora</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "O Doable revolucionou a forma como organizo meus projetos. Consigo acompanhar todas as tarefas e
                  nunca mais perco prazos importantes."
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">RS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Rafael Silva</h4>
                    <p className="text-sm text-muted-foreground">Gerente de Projetos</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Como gerente de equipe, o Doable me ajuda a delegar tarefas e acompanhar o progresso de todos os
                  membros em tempo real. Indispensável!"
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">JO</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Juliana Oliveira</h4>
                    <p className="text-sm text-muted-foreground">Estudante</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Uso o Doable para organizar meus estudos e trabalhos acadêmicos. A interface é intuitiva e me ajuda a
                  manter o foco no que realmente importa."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-12 md:py-24" id="faq">
          <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Perguntas Frequentes</h2>
              <p className="mx-auto mt-4 max-w-[85%] text-base text-muted-foreground sm:text-lg">
                Tire suas dúvidas sobre o Doable.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-bold">Como funciona o período de teste gratuito?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Oferecemos 14 dias de teste gratuito em todos os planos pagos. Você pode experimentar todos os
                  recursos sem compromisso e cancelar a qualquer momento.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-bold">Posso mudar de plano depois?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor
                  imediatamente.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-bold">O Doable funciona em quais dispositivos?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  O Doable está disponível para web, iOS e Android. Todos os seus dados são sincronizados
                  automaticamente entre os dispositivos.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-bold">Como funciona o suporte ao cliente?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Oferecemos suporte por email para todos os planos e suporte prioritário por chat para os planos pagos.
                </p>
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
                <Link href="/cadastro">Começar Grátis</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

