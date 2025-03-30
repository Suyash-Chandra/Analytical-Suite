"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChartWrapper } from "./chart-wrapper"

const initialData = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
  { name: "Jul", sales: 3490, revenue: 4300 },
  { name: "Aug", sales: 4000, revenue: 2400 },
  { name: "Sep", sales: 3000, revenue: 1398 },
  { name: "Oct", sales: 2000, revenue: 9800 },
  { name: "Nov", sales: 2780, revenue: 3908 },
  { name: "Dec", sales: 1890, revenue: 4800 },
]

export function SalesChart() {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    // Simulate data updates
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          sales: item.sales + Math.floor(Math.random() * 200 - 100),
          revenue: item.revenue + Math.floor(Math.random() * 300 - 150),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ChartWrapper title="Sales Trend">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid-color)" />
          <XAxis dataKey="name" stroke="var(--chart-text-color)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="var(--chart-text-color)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--chart-tooltip-border)",
              color: "var(--chart-text-color)",
            }}
            labelStyle={{ color: "var(--chart-text-color)" }}
            itemStyle={{ color: "var(--chart-text-color)" }}
          />
          <Legend wrapperStyle={{ color: "var(--chart-text-color)" }} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1000}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

