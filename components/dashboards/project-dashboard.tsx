"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProjectBoard } from "../boards/project-board"
import { ProjectProgress } from "../charts/project-progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Plus, Users, AlertCircle } from "lucide-react"

export function ProjectDashboard() {
  const [project, setProject] = useState("marketing")

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Project Management</CardTitle>
            <CardDescription>Track your projects, tasks, and deadlines</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={project} onValueChange={setProject}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">Marketing Campaign</SelectItem>
                <SelectItem value="website">Website Redesign</SelectItem>
                <SelectItem value="mobile">Mobile App Development</SelectItem>
                <SelectItem value="research">Market Research</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm">
              <Plus className="mr-1 h-4 w-4" />
              New Task
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
        </CardContent>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span>8 completed, 16 in progress</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <div className="flex items-center pt-1 text-xs text-amber-500">
            <AlertCircle className="mr-1 h-3 w-3" />
            <span>2 due this week</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span>4 active now</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Project Status</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <Badge className="text-sm" variant="outline">
              In Progress
            </Badge>
          </div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span>65% completed</span>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Project Progress</CardTitle>
          <CardDescription>Track completion status across project phases</CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <ProjectProgress />
        </CardContent>
      </Card>

      <Card className="col-span-4 md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and changes to the project</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Design mockups completed</p>
                <p className="text-xs text-muted-foreground">
                  Jane Smith completed all design mockups for the landing page
                </p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
              <Badge variant="outline">Design</Badge>
            </div>
            <div className="flex items-start space-x-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">API integration started</p>
                <p className="text-xs text-muted-foreground">John Doe began work on the payment API integration</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday at 4:30 PM</p>
              </div>
              <Badge variant="outline">Development</Badge>
            </div>
            <div className="flex items-start space-x-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Content review completed</p>
                <p className="text-xs text-muted-foreground">Marketing team approved all content for the campaign</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
              <Badge variant="outline">Content</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Task Board</CardTitle>
          <CardDescription>Manage and organize your project tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectBoard />
        </CardContent>
      </Card>
    </div>
  )
}

