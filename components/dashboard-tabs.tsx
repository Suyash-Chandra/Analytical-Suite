"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalesDashboard } from "./dashboards/sales-dashboard"
import { FitnessDashboard } from "./dashboards/fitness-dashboard"
import { FinancialDashboard } from "./dashboards/financial-dashboard"
import { ProjectDashboard } from "./dashboards/project-dashboard"
import { WeatherDashboard } from "./dashboards/weather-dashboard"
import { BarChart3, Activity, TrendingUp, Kanban, Cloud } from "lucide-react"
import { EnsureChartsLoaded } from "./charts/ensure-charts-loaded"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("sales")
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTabChange = (value: string) => {
    setIsTransitioning(true)
    setActiveTab(value)

    // Add a small delay to simulate a smooth transition
    setTimeout(() => {
      setIsTransitioning(false)
      // Force a resize event to ensure charts are properly rendered
      window.dispatchEvent(new Event("resize"))
    }, 300)
  }

  if (!mounted) {
    return (
      <div className="w-full p-6">
        <div className="h-8 w-full bg-muted/30 rounded-md mb-8"></div>
        <div className="h-[400px] w-full bg-muted/30 rounded-md"></div>
      </div>
    )
  }

  return (
    <Tabs defaultValue="sales" className="w-full p-6" value={activeTab} onValueChange={handleTabChange}>
      <TabsList className="grid w-full grid-cols-5 mb-8 p-1 rounded-xl bg-muted/30">
        <TabsTrigger
          value="sales"
          className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <BarChart3 className="h-4 w-4" />
          <span className="hidden sm:inline">Sales</span>
        </TabsTrigger>
        <TabsTrigger
          value="fitness"
          className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Activity className="h-4 w-4" />
          <span className="hidden sm:inline">Fitness</span>
        </TabsTrigger>
        <TabsTrigger
          value="financial"
          className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <TrendingUp className="h-4 w-4" />
          <span className="hidden sm:inline">Financial</span>
        </TabsTrigger>
        <TabsTrigger
          value="project"
          className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Kanban className="h-4 w-4" />
          <span className="hidden sm:inline">Projects</span>
        </TabsTrigger>
        <TabsTrigger
          value="weather"
          className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Cloud className="h-4 w-4" />
          <span className="hidden sm:inline">Weather</span>
        </TabsTrigger>
      </TabsList>

      <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
        <TabsContent value="sales" className="space-y-4">
          <SalesDashboard />
        </TabsContent>
        <TabsContent value="fitness" className="space-y-4">
          <FitnessDashboard />
        </TabsContent>
        <TabsContent value="financial" className="space-y-4">
          <FinancialDashboard />
        </TabsContent>
        <TabsContent value="project" className="space-y-4">
          <ProjectDashboard />
        </TabsContent>
        <TabsContent value="weather" className="space-y-4">
          <WeatherDashboard />
        </TabsContent>
      </div>
      <EnsureChartsLoaded />
    </Tabs>
  )
}

