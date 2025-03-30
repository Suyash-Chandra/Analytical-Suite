"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityChart } from "../charts/activity-chart"
import { CalorieChart } from "../charts/calorie-chart"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Flame, Footprints, Heart, Timer } from "lucide-react"

export function FitnessDashboard() {
  const [period, setPeriod] = useState("week")
  const [goalProgress, setGoalProgress] = useState(68)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Fitness Tracker</CardTitle>
            <CardDescription>Monitor your daily activity, calories, and fitness goals</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="week" value={period} onValueChange={setPeriod} className="w-[250px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Steps</CardTitle>
          <Footprints className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8,946</div>
          <p className="text-xs text-muted-foreground">Goal: 10,000 steps</p>
          <Progress value={89.46} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Calories</CardTitle>
          <Flame className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,248</div>
          <p className="text-xs text-muted-foreground">Goal: 2,500 calories</p>
          <Progress value={49.92} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Time</CardTitle>
          <Timer className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42 min</div>
          <p className="text-xs text-muted-foreground">Goal: 60 minutes</p>
          <Progress value={70} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">72 bpm</div>
          <p className="text-xs text-muted-foreground">Resting: 68 bpm</p>
          <Progress value={72} className="mt-2" />
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
          <CardDescription>Your activity patterns throughout the day</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <ActivityChart />
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Calorie Breakdown</CardTitle>
          <CardDescription>Calories burned by activity type</CardDescription>
        </CardHeader>
        <CardContent>
          <CalorieChart />
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Weekly Goals</CardTitle>
          <CardDescription>Track your progress towards weekly fitness goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Complete 5 workouts</p>
                  <p className="text-xs text-muted-foreground">3 of 5 completed</p>
                </div>
              </div>
              <Badge variant="outline">60%</Badge>
            </div>
            <Progress value={60} />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Footprints className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Walk 50,000 steps</p>
                  <p className="text-xs text-muted-foreground">32,456 of 50,000 steps</p>
                </div>
              </div>
              <Badge variant="outline">65%</Badge>
            </div>
            <Progress value={65} />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Burn 10,000 calories</p>
                  <p className="text-xs text-muted-foreground">6,824 of 10,000 calories</p>
                </div>
              </div>
              <Badge variant="outline">{goalProgress}%</Badge>
            </div>
            <Progress value={goalProgress} />

            <Button className="w-full mt-4" onClick={() => setGoalProgress(Math.min(100, goalProgress + 5))}>
              Log Activity
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

