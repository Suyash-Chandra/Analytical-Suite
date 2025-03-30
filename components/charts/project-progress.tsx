"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts"
import { ChartWrapper } from "./chart-wrapper"

const initialData = [
  { name: "Planning", completed: 100, total: 100 },
  { name: "Design", completed: 85, total: 100 },
  { name: "Development", completed: 60, total: 100 },
  { name: "Testing", completed: 30, total: 100 },
  { name: "Deployment", completed: 10, total: 100 },
  { name: "Maintenance", completed: 0, total: 100 },
]

export function ProjectProgress() {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => {
          if (item.completed < item.total) {
            return {
              ...item,
              completed: Math.min(item.total, item.completed + Math.floor(Math.random() * 5)),
            }
          }
          return item
        }),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ChartWrapper title="Project Progress">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid-color)" />
          <XAxis
            type="number"
            stroke="var(--chart-text-color)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis
            dataKey="name"
            type="category"
            stroke="var(--chart-text-color)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={100}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Completion"]}
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--chart-tooltip-border)",
              color: "var(--chart-text-color)",
            }}
            labelStyle={{ color: "var(--chart-text-color)" }}
            itemStyle={{ color: "var(--chart-text-color)" }}
          />
          <Legend wrapperStyle={{ color: "var(--chart-text-color)" }} />
          <Bar
            dataKey="completed"
            fill="hsl(var(--primary))"
            name="Completed"
            radius={[0, 4, 4, 0]}
            isAnimationActive={true}
            animationDuration={1000}
          />
          <ReferenceLine x={100} stroke="var(--chart-grid-color)" strokeDasharray="3 3" />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

