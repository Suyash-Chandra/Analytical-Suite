"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChartWrapper } from "./chart-wrapper"

const initialData = [
  { time: "6 AM", steps: 200, calories: 50 },
  { time: "8 AM", steps: 800, calories: 120 },
  { time: "10 AM", steps: 1200, calories: 180 },
  { time: "12 PM", steps: 500, calories: 90 },
  { time: "2 PM", steps: 1800, calories: 250 },
  { time: "4 PM", steps: 1400, calories: 210 },
  { time: "6 PM", steps: 2000, calories: 300 },
  { time: "8 PM", steps: 900, calories: 150 },
  { time: "10 PM", steps: 300, calories: 70 },
]

export function ActivityChart() {
  const [data, setData] = useState(initialData)

  return (
    <ChartWrapper title="Activity Timeline">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid-color)" />
          <XAxis dataKey="time" stroke="var(--chart-text-color)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--chart-text-color)" fontSize={12} tickLine={false} axisLine={false} yAxisId="left" />
          <YAxis
            stroke="var(--chart-text-color)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            yAxisId="right"
            orientation="right"
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
          <Bar
            dataKey="steps"
            fill="hsl(var(--primary))"
            yAxisId="left"
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1000}
          />
          <Bar
            dataKey="calories"
            fill="hsl(var(--secondary))"
            yAxisId="right"
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

