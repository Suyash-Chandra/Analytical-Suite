"use client"

import { useState, useEffect } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { WelcomeHero } from "@/components/welcome-hero"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 w-full bg-muted/30"></div>
        <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
          <div className="h-20 w-full max-w-xl bg-muted/30 rounded-md"></div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <DashboardShell>
        <WelcomeHero />
        <DashboardTabs />
      </DashboardShell>
    </main>
  )
}

