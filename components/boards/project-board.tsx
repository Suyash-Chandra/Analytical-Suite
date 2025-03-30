"use client"

import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "lucide-react"

// Initial task data
const initialTasks = {
  todo: [
    {
      id: "task-1",
      title: "Create marketing assets",
      description: "Design social media graphics for campaign",
      priority: "medium",
      dueDate: "2023-04-05",
      assignee: "Jane Smith",
      assigneeInitials: "JS",
    },
    {
      id: "task-2",
      title: "Update product documentation",
      description: "Review and update user guides",
      priority: "low",
      dueDate: "2023-04-10",
      assignee: "John Doe",
      assigneeInitials: "JD",
    },
  ],
  inProgress: [
    {
      id: "task-3",
      title: "Implement payment gateway",
      description: "Integrate Stripe API for payments",
      priority: "high",
      dueDate: "2023-04-02",
      assignee: "Mike Johnson",
      assigneeInitials: "MJ",
    },
    {
      id: "task-4",
      title: "User testing",
      description: "Conduct usability tests with focus group",
      priority: "medium",
      dueDate: "2023-04-07",
      assignee: "Sarah Williams",
      assigneeInitials: "SW",
    },
  ],
  review: [
    {
      id: "task-5",
      title: "Code review",
      description: "Review pull requests for new features",
      priority: "high",
      dueDate: "2023-03-30",
      assignee: "Robert Brown",
      assigneeInitials: "RB",
    },
  ],
  done: [
    {
      id: "task-6",
      title: "Project kickoff meeting",
      description: "Initial team meeting to discuss project goals",
      priority: "medium",
      dueDate: "2023-03-25",
      assignee: "Jane Smith",
      assigneeInitials: "JS",
    },
    {
      id: "task-7",
      title: "Requirements gathering",
      description: "Document project requirements and specifications",
      priority: "high",
      dueDate: "2023-03-28",
      assignee: "John Doe",
      assigneeInitials: "JD",
    },
  ],
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-500"
    case "medium":
      return "bg-yellow-500"
    case "low":
      return "bg-green-500"
    default:
      return "bg-blue-500"
  }
}

export function ProjectBoard() {
  const [tasks, setTasks] = useState(initialTasks)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    // If there's no destination or the item is dropped in the same place
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return
    }

    // Find the task that was dragged
    const sourceColumn = tasks[source.droppableId]
    const destinationColumn = tasks[destination.droppableId]

    const draggedTask = sourceColumn.find((task) => task.id === draggableId)

    // Create new arrays for the source and destination columns
    const newSourceColumn = [...sourceColumn]
    newSourceColumn.splice(source.index, 1)

    const newDestinationColumn = [...destinationColumn]
    newDestinationColumn.splice(destination.index, 0, draggedTask)

    // Update the state
    setTasks({
      ...tasks,
      [source.droppableId]: newSourceColumn,
      [destination.droppableId]: newDestinationColumn,
    })
  }

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.keys(initialTasks).map((columnId) => (
          <div key={columnId} className="flex flex-col">
            <h3 className="font-medium mb-2 capitalize">{columnId.replace(/([A-Z])/g, " $1")}</h3>
            <div className="bg-muted/30 rounded-lg p-2 min-h-[200px] flex-1">
              {initialTasks[columnId].map((task, index) => (
                <div key={task.id} className="bg-card rounded-md p-3 mb-2 shadow-sm border opacity-50">
                  <div className="h-4 w-3/4 bg-muted/50 rounded mb-2"></div>
                  <div className="h-3 w-full bg-muted/50 rounded mb-3"></div>
                  <div className="flex justify-between">
                    <div className="h-3 w-1/4 bg-muted/50 rounded"></div>
                    <div className="h-6 w-6 rounded-full bg-muted/50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.keys(tasks).map((columnId) => (
          <div key={columnId} className="flex flex-col">
            <h3 className="font-medium mb-2 capitalize">{columnId.replace(/([A-Z])/g, " $1")}</h3>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-muted/30 rounded-lg p-2 min-h-[200px] flex-1"
                >
                  {tasks[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-card rounded-md p-3 mb-2 shadow-sm border"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{task.title}</h4>
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">{task.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {task.dueDate}
                            </div>
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=24&width=24" alt={task.assignee} />
                              <AvatarFallback className="text-xs">{task.assigneeInitials}</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  )
}

