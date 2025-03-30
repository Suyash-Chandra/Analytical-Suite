import type { ReactNode } from "react"
import { ModeToggle } from "./mode-toggle"
import { UserNav } from "./user-nav"
import { Search } from "./search"
import { BrainCircuit } from "lucide-react"
import { Footer } from "./footer"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-6">
        <div className="flex items-center gap-2 font-semibold">
          <div className="p-1.5 rounded-md bg-primary/10">
            <BrainCircuit className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            AI Dashboard Suite
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Search />
          <ModeToggle />
          <UserNav />
        </div>
      </header>
      <div className="flex-1 bg-muted/5">{children}</div>
      <Footer />
    </div>
  )
}

