'use client';

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen" suppressHydrationWarning >
      <Button><Rocket className="h-6 w-6" /> Doable Boilerplate</Button>
    </div>
  );
}
