"use client"

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function Search() {
  return (
    <div className="relative w-64">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder="Search..." className="pl-8 w-full" />
    </div>
  )
}

