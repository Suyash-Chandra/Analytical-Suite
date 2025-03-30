"use client"

import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartWrapper } from "./chart-wrapper"

const initialData = [
  { date: "Jan 1", value: 4000 },
  { date: "Jan 15", value: 3000 },
  { date: "Feb 1", value: 2000 },
  { date: "Feb 15", value: 2780 },
  { date: "Mar 1", value: 1890 },
  { date: "Mar 15", value: 2390 },
  { date: "Apr 1", value: 3490 },
  { date: "Apr 15", value: 3490 },
  { date: "May 1", value: 4000 },
  { date: "May 15", value: 5000 },
  { date: "Jun 1", value: 4800 },
  { date: "Jun 15", value: 5200 },
]

export function StockChart() {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    // Simulate stock price changes
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: item.value + Math.floor(Math.random() * 200 - 100),
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ChartWrapper title="Portfolio Performance">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid-color)" />
          <XAxis dataKey="date" stroke="var(--chart-text-color)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="var(--chart-text-color)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            formatter={(value) => [`$${value}`, "Portfolio Value"]}
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--chart-tooltip-border)",
              color: "var(--chart-text-color)",
            }}
            labelStyle={{ color: "var(--chart-text-color)" }}
            itemStyle={{ color: "var(--chart-text-color)" }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            isAnimationActive={true}
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

