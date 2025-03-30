"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalesChart } from "../charts/sales-chart"
import { SalesOverview } from "../charts/sales-overview"
import { RevenueMetrics } from "../metrics/revenue-metrics"
import { SalesTable } from "../tables/sales-table"

export function SalesDashboard() {
  const [period, setPeriod] = useState("monthly")
  const [region, setRegion] = useState("all")

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Sales Dashboard</CardTitle>
            <CardDescription>Track your sales performance and revenue insights</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="monthly" value={period} onValueChange={setPeriod} className="w-[250px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      <RevenueMetrics />

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Sales Trend</CardTitle>
          <CardDescription>Monthly sales performance over time</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <SalesChart />
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
          <CardDescription>Revenue distribution by product category</CardDescription>
        </CardHeader>
        <CardContent>
          <SalesOverview />
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest sales transactions and status</CardDescription>
        </CardHeader>
        <CardContent>
          <SalesTable />
        </CardContent>
      </Card>
    </div>
  )
}

