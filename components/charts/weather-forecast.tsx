"use client"

import { useEffect, useState } from "react"
import { Cloud, CloudRain, CloudSnow, Sun, CloudSun } from "lucide-react"

const forecastData = [
  {
    day: "Monday",
    date: "Mar 29",
    high: 75,
    low: 62,
    condition: "sunny",
    precipitation: "0%",
    humidity: "45%",
    wind: "8 mph",
  },
  {
    day: "Tuesday",
    date: "Mar 30",
    high: 72,
    low: 60,
    condition: "partly-cloudy",
    precipitation: "10%",
    humidity: "50%",
    wind: "10 mph",
  },
  {
    day: "Wednesday",
    date: "Mar 31",
    high: 68,
    low: 58,
    condition: "cloudy",
    precipitation: "30%",
    humidity: "65%",
    wind: "12 mph",
  },
  {
    day: "Thursday",
    date: "Apr 1",
    high: 65,
    low: 55,
    condition: "rainy",
    precipitation: "80%",
    humidity: "75%",
    wind: "15 mph",
  },
  {
    day: "Friday",
    date: "Apr 2",
    high: 62,
    low: 52,
    condition: "rainy",
    precipitation: "70%",
    humidity: "80%",
    wind: "12 mph",
  },
  {
    day: "Saturday",
    date: "Apr 3",
    high: 65,
    low: 54,
    condition: "partly-cloudy",
    precipitation: "20%",
    humidity: "60%",
    wind: "8 mph",
  },
  {
    day: "Sunday",
    date: "Apr 4",
    high: 70,
    low: 58,
    condition: "sunny",
    precipitation: "5%",
    humidity: "50%",
    wind: "6 mph",
  },
]

const getWeatherIcon = (condition) => {
  switch (condition) {
    case "sunny":
      return <Sun className="h-8 w-8 text-yellow-500" />
    case "partly-cloudy":
      return <CloudSun className="h-8 w-8 text-blue-400" />
    case "cloudy":
      return <Cloud className="h-8 w-8 text-gray-400" />
    case "rainy":
      return <CloudRain className="h-8 w-8 text-blue-500" />
    case "snowy":
      return <CloudSnow className="h-8 w-8 text-blue-200" />
    default:
      return <Sun className="h-8 w-8 text-yellow-500" />
  }
}

export function WeatherForecast() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {forecastData.map((day, index) => (
        <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground">
          <div className="font-medium">{day.day}</div>
          <div className="text-xs text-muted-foreground mb-2">{day.date}</div>
          <div className="my-2">{getWeatherIcon(day.condition)}</div>
          <div className="flex items-center justify-between w-full mt-2">
            <span className="font-medium">{day.high}°</span>
            <span className="text-muted-foreground">{day.low}°</span>
          </div>
          <div className="text-xs text-muted-foreground mt-2">Precip: {day.precipitation}</div>
        </div>
      ))}
    </div>
  )
}

