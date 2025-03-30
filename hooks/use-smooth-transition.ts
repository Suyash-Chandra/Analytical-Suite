"use client"

import { useState } from "react"

export function useSmoothTransition(initialState = false, duration = 300) {
  const [isActive, setIsActive] = useState(initialState)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggle = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setIsActive(!isActive)

    setTimeout(() => {
      setIsTransitioning(false)
    }, duration)
  }

  return {
    isActive,
    isTransitioning,
    toggle,
    setActive: (value: boolean) => {
      if (isTransitioning) return
      if (value === isActive) return

      setIsTransitioning(true)
      setIsActive(value)

      setTimeout(() => {
        setIsTransitioning(false)
      }, duration)
    },
  }
}

