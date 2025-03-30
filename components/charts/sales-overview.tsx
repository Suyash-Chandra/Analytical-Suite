"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { ChartWrapper } from "./chart-wrapper"

const initialData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Food", value: 200 },
  { name: "Books", value: 150 },
  { name: "Other", value: 100 },
]

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
  "hsl(var(--muted))",
  "hsl(var(--card))",
]

export function SalesOverview() {
  const [data, setData] = useState(initialData)

  return (
    <ChartWrapper title="Revenue Breakdown">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            isAnimationActive={true}
            animationDuration={1000}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `$${value}`}
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--chart-tooltip-border)",
              color: "var(--chart-text-color)",
            }}
            labelStyle={{ color: "var(--chart-text-color)" }}
            itemStyle={{ color: "var(--chart-text-color)" }}
          />
          <Legend formatter={(value) => <span style={{ color: "var(--chart-text-color)" }}>{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

