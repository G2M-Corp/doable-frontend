'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between px-4 md:px-8">
          <div className="flex gap-2 items-center">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Doable</span>
          </div>
          <nav className="hidden gap-6 md:flex">
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
            <Button asChild>
              <Link href="/cadastro">Começar Grátis</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
