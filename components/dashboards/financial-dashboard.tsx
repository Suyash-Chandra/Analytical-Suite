"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StockChart } from "../charts/stock-chart"
import { PortfolioAllocation } from "../charts/portfolio-allocation"
import { StockTable } from "../tables/stock-table"
import { ArrowDown, ArrowUp, DollarSign, Percent, TrendingUp } from "lucide-react"

export function FinancialDashboard() {
  const [period, setPeriod] = useState("1m")
  const [view, setView] = useState("overview")

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Financial Portfolio</CardTitle>
            <CardDescription>Track your investments and stock performance</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="1m" value={period} onValueChange={setPeriod} className="w-[300px]">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="1d">1D</TabsTrigger>
                <TabsTrigger value="1w">1W</TabsTrigger>
                <TabsTrigger value="1m">1M</TabsTrigger>
                <TabsTrigger value="3m">3M</TabsTrigger>
                <TabsTrigger value="1y">1Y</TabsTrigger>
              </TabsList>
            </Tabs>
            <Select value={view} onValueChange={setView}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="overview">Overview</SelectItem>
                <SelectItem value="stocks">Stocks</SelectItem>
                <SelectItem value="crypto">Crypto</SelectItem>
                <SelectItem value="bonds">Bonds</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$124,568.78</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+2.5% ($3,045.62)</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Daily Change</CardTitle>
          <Percent className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">+1.2%</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+$1,494.83 today</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">AAPL</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+3.2% today</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Worst Performer</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">META</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <ArrowDown className="mr-1 h-3 w-3" />
            <span>-1.8% today</span>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
          <CardDescription>Historical performance of your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <StockChart />
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Asset Allocation</CardTitle>
          <CardDescription>Distribution of your investment portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <PortfolioAllocation />
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
          <CardDescription>Your current stock positions and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <StockTable />
        </CardContent>
      </Card>
    </div>
  )
}

