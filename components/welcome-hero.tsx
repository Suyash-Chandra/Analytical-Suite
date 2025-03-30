"use client"

import { useState, useEffect } from "react"
import { BarChart3, Activity, TrendingUp, Kanban, Cloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Sales Dashboard",
    description: "Track revenue, sales metrics, and performance insights",
    color: "bg-blue-500/20 text-blue-500 border-blue-500/20",
    hoverColor: "hover:bg-blue-500/30 hover:border-blue-500/30",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Fitness Tracker",
    description: "Monitor steps, calories, and fitness goals",
    color: "bg-green-500/20 text-green-500 border-green-500/20",
    hoverColor: "hover:bg-green-500/30 hover:border-green-500/30",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Financial Portfolio",
    description: "Analyze stock performance and asset allocation",
    color: "bg-purple-500/20 text-purple-500 border-purple-500/20",
    hoverColor: "hover:bg-purple-500/30 hover:border-purple-500/30",
  },
  {
    icon: <Kanban className="h-5 w-5" />,
    title: "Project Management",
    description: "Organize tasks, track progress, and manage deadlines",
    color: "bg-amber-500/20 text-amber-500 border-amber-500/20",
    hoverColor: "hover:bg-amber-500/30 hover:border-amber-500/30",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Weather Dashboard",
    description: "View real-time weather data and forecasts",
    color: "bg-cyan-500/20 text-cyan-500 border-cyan-500/20",
    hoverColor: "hover:bg-cyan-500/30 hover:border-cyan-500/30",
  },
]

export function WelcomeHero() {
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCardClick = (index: number) => {
    // Find and click the corresponding tab
    setTimeout(() => {
      const tabButtons = document.querySelectorAll('[role="tab"]')
      if (tabButtons && tabButtons[index]) {
        ;(tabButtons[index] as HTMLElement).click()
      }
    }, 100)
  }

  if (!mounted) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <div className="h-20 w-full max-w-xl bg-muted/30 rounded-md"></div>
      </div>
    )
  }

  return (
    <div className="w-full py-12 px-4">
      <div className="text-center mb-8 animate-fadeIn">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          AI-Powered Analytics Suite
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="premium-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-400 dark:to-indigo-600">
            Welcome to Your Dashboard
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal mb-8">
          Explore our comprehensive suite of interactive analytics dashboards powered by AI
        </p>
      </div>

      <FeatureIcons />

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden py-6 mb-8">
        <div className="animate-marquee flex space-x-6">
          {/* First set of cards */}
          {features.map((feature, index) => (
            <FeatureCard
              key={`card-1-${index}`}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => handleCardClick(index)}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {features.map((feature, index) => (
            <FeatureCard
              key={`card-2-${index}`}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center animate-fadeIn" style={{ animationDelay: "1s" }}>
        <Badge variant="outline" className="animate-pulse text-sm py-1 px-3">
          Powered by Advanced AI
        </Badge>
      </div>
    </div>
  )
}

function FeatureCard({
  feature,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  feature: (typeof features)[0]
  index: number
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}) {
  return (
    <div
      className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg transition-all duration-300 ${feature.color} ${feature.hoverColor} animate-float cursor-pointer transform hover:-translate-y-1 hover:shadow-xl min-w-[280px] max-w-[280px]`}
      style={{ animationDelay: `${0.2 * index}s` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="flex items-center mb-3">
        <div className={`p-3 rounded-lg ${feature.color} mr-4`}>{feature.icon}</div>
        <h3 className="text-lg font-semibold">{feature.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </div>
  )
}

function FeatureIcons() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const icons = [
    { icon: <BarChart3 className="h-10 w-10" />, color: "text-blue-500", bg: "bg-blue-500/20" },
    { icon: <Activity className="h-10 w-10" />, color: "text-green-500", bg: "bg-green-500/20" },
    { icon: <TrendingUp className="h-10 w-10" />, color: "text-purple-500", bg: "bg-purple-500/20" },
    { icon: <Kanban className="h-10 w-10" />, color: "text-amber-500", bg: "bg-amber-500/20" },
    { icon: <Cloud className="h-10 w-10" />, color: "text-cyan-500", bg: "bg-cyan-500/20" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-32 w-32 mx-auto my-10">
      <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
      <div className="absolute inset-0 rounded-full border border-primary/20"></div>

      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${item.color} ${
            currentIndex === index ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"
          }`}
        >
          <div className={`p-4 rounded-full ${item.bg}`}>{item.icon}</div>
        </div>
      ))}
    </div>
  )
}

