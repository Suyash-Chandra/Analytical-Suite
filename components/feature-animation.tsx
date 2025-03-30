"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, Activity, TrendingUp, Kanban, Cloud } from "lucide-react"

const icons = [
  { icon: <BarChart3 className="h-8 w-8" />, color: "text-blue-500" },
  { icon: <Activity className="h-8 w-8" />, color: "text-green-500" },
  { icon: <TrendingUp className="h-8 w-8" />, color: "text-purple-500" },
  { icon: <Kanban className="h-8 w-8" />, color: "text-amber-500" },
  { icon: <Cloud className="h-8 w-8" />, color: "text-cyan-500" },
]

export function FeatureAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-24 w-24 mx-auto my-8">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            scale: currentIndex === index ? 1 : 0.8,
            rotate: currentIndex === index ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            rotate: { duration: 0.5, times: [0, 0.3, 0.6, 1] },
          }}
          className={`absolute inset-0 flex items-center justify-center ${item.color}`}
          style={{ display: currentIndex === index ? "flex" : "none" }}
        >
          {item.icon}
        </motion.div>
      ))}
      <motion.div
        className="absolute inset-0 rounded-full bg-background/10"
        animate={{
          boxShadow: ["0 0 0 0px rgba(120, 120, 255, 0.2)", "0 0 0 20px rgba(120, 120, 255, 0)"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
    </div>
  )
}

