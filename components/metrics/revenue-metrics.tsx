"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"

export function RevenueMetrics() {
  const [metrics, setMetrics] = useState({
    totalRevenue: 45678.23,
    totalRevenueChange: 12.5,
    averageOrder: 156.78,
    averageOrderChange: -2.3,
    conversionRate: 3.45,
    conversionRateChange: 0.8,
    activeCustomers: 1245,
    activeCustomersChange: 5.6,
  })

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${metrics.totalRevenue.toLocaleString()}</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+{metrics.totalRevenueChange}% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Order</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${metrics.averageOrder}</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <ArrowDown className="mr-1 h-3 w-3" />
            <span>{metrics.averageOrderChange}% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.conversionRate}%</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+{metrics.conversionRateChange}% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.activeCustomers}</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUp className="mr-1 h-3 w-3" />
            <span>+{metrics.activeCustomersChange}% from last month</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

