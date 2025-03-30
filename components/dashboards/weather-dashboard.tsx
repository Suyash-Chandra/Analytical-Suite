"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WeatherChart } from "../charts/weather-chart"
import { WeatherForecast } from "../charts/weather-forecast"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, CloudRain, Droplets, MapPin, Search, Sun, Wind } from "lucide-react"
import { Input } from "@/components/ui/input"

export function WeatherDashboard() {
  const [location, setLocation] = useState("new-york")
  const [searchInput, setSearchInput] = useState("")

  const handleSearch = () => {
    if (searchInput) {
      setLocation(searchInput.toLowerCase().replace(/\s+/g, "-"))
      setSearchInput("")
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Weather Dashboard</CardTitle>
            <CardDescription>Real-time weather data and forecasts</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative w-[250px]">
              <Input
                placeholder="Search location..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pr-8"
              />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0" onClick={handleSearch}>
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="tokyo">Tokyo</SelectItem>
                <SelectItem value="sydney">Sydney</SelectItem>
                <SelectItem value="paris">Paris</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      <Card className="col-span-4 md:col-span-2 lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Current Weather</CardTitle>
            <CardDescription>
              <div className="flex items-center">
                <MapPin className="mr-1 h-3 w-3" />
                <span>New York, NY</span>
              </div>
            </CardDescription>
          </div>
          <Sun className="h-8 w-8 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-5xl font-bold">72°F</div>
              <div className="mt-2 text-sm">Feels like 75°F</div>
              <div className="mt-4">
                <Badge className="mr-2">Sunny</Badge>
                <Badge variant="outline">Clear skies</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <Wind className="mb-1 h-5 w-5 text-muted-foreground" />
                <div className="text-sm font-medium">8 mph</div>
                <div className="text-xs text-muted-foreground">Wind</div>
              </div>
              <div className="flex flex-col items-center">
                <Droplets className="mb-1 h-5 w-5 text-muted-foreground" />
                <div className="text-sm font-medium">45%</div>
                <div className="text-xs text-muted-foreground">Humidity</div>
              </div>
              <div className="flex flex-col items-center">
                <CloudRain className="mb-1 h-5 w-5 text-muted-foreground" />
                <div className="text-sm font-medium">10%</div>
                <div className="text-xs text-muted-foreground">Rain</div>
              </div>
              <div className="flex flex-col items-center">
                <Cloud className="mb-1 h-5 w-5 text-muted-foreground" />
                <div className="text-sm font-medium">15%</div>
                <div className="text-xs text-muted-foreground">Cloud</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Temperature Trend</CardTitle>
          <CardDescription>24-hour temperature forecast</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <WeatherChart />
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>7-Day Forecast</CardTitle>
          <CardDescription>Extended weather forecast for the week</CardDescription>
        </CardHeader>
        <CardContent>
          <WeatherForecast />
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Weather Alerts</CardTitle>
          <CardDescription>Current weather advisories and warnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-medium">UV Index Alert</p>
                    <p className="text-sm text-muted-foreground">High UV levels expected between 10 AM and 4 PM</p>
                  </div>
                </div>
                <Badge>Moderate</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Wind className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Wind Advisory</p>
                    <p className="text-sm text-muted-foreground">Gusty winds up to 25 mph expected this afternoon</p>
                  </div>
                </div>
                <Badge>Low</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Air Quality</p>
                    <p className="text-sm text-muted-foreground">Air quality is good for outdoor activities</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Good</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

