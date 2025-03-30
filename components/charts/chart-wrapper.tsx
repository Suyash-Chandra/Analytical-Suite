"use client"

import type React from "react"

import { type ReactNode, useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { useTheme } from "next-themes"

interface ChartWrapperProps {
  children: ReactNode
  height?: string
  width?: string
  title?: string
}

export function ChartWrapper({ children, height = "300px", width = "100%", title }: ChartWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    // Simulate data loading with a short delay
    const loadTimer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => {
      clearTimeout(loadTimer)
    }
  }, [])

  // When theme changes, trigger a resize to update charts
  useEffect(() => {
    if (mounted && !loading) {
      window.dispatchEvent(new Event("resize"))
    }
  }, [resolvedTheme, mounted, loading])

  // Apply theme-specific styles to the chart container
  const chartTheme = {
    "--chart-text-color": resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.85)",
    "--chart-grid-color": resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
    "--chart-tooltip-bg": resolvedTheme === "dark" ? "#1f2937" : "#ffffff",
    "--chart-tooltip-border": resolvedTheme === "dark" ? "#374151" : "#e5e7eb",
  } as React.CSSProperties

  if (!mounted || loading) {
    return (
      <div
        className="flex flex-col items-center justify-center space-y-4 bg-muted/10 rounded-md p-4"
        style={{ height, width }}
      >
        {title && <Skeleton className="h-4 w-32" />}
        <Skeleton className="h-[calc(100%-40px)] w-full rounded-md" />
        <div className="flex space-x-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    )
  }

  return <div style={{ height, width, ...chartTheme }}>{children}</div>
}

