"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { ChartWrapper } from "./chart-wrapper"

const initialData = [
  { time: "12 AM", temp: 65, feels: 63 },
  { time: "3 AM", temp: 62, feels: 60 },
  { time: "6 AM", temp: 60, feels: 58 },
  { time: "9 AM", temp: 65, feels: 63 },
  { time: "12 PM", temp: 72, feels: 75 },
  { time: "3 PM", temp: 75, feels: 78 },
  { time: "6 PM", temp: 72, feels: 74 },
  { time: "9 PM", temp: 68, feels: 66 },
  { time: "12 AM", temp: 65, feels: 63 },
]

export function WeatherChart() {
  const [data, setData] = useState(initialData)

  return (
    <ChartWrapper title="Temperature Trend">
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
          <XAxis dataKey="time" stroke="var(--chart-text-color)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="var(--chart-text-color)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}°F`}
          />
          <Tooltip
            formatter={(value) => [`${value}°F`, "Temperature"]}
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--chart-tooltip-border)",
              color: "var(--chart-text-color)",
            }}
            labelStyle={{ color: "var(--chart-text-color)" }}
            itemStyle={{ color: "var(--chart-text-color)" }}
          />
          <ReferenceLine
            y={32}
            stroke="var(--chart-grid-color)"
            strokeDasharray="3 3"
            label={{ value: "Freezing", fill: "var(--chart-text-color)" }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
            activeDot={{ r: 6 }}
            name="Temperature"
            isAnimationActive={true}
            animationDuration={1000}
          />
          <Line
            type="monotone"
            dataKey="feels"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "hsl(var(--secondary))", r: 4 }}
            activeDot={{ r: 6 }}
            name="Feels Like"
            isAnimationActive={true}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

