"use client"

import { useEffect } from "react"

// This component ensures all charts are properly loaded
export function EnsureChartsLoaded() {
  useEffect(() => {
    // Force a reflow of the charts by triggering a resize event
    const triggerResize = () => {
      window.dispatchEvent(new Event("resize"))
    }

    // Trigger resize after a short delay to ensure charts are rendered
    const timeoutId = setTimeout(() => {
      triggerResize()
    }, 100)

    // Trigger resize again after a longer delay for any lazy-loaded charts
    const secondTimeoutId = setTimeout(() => {
      triggerResize()
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(secondTimeoutId)
    }
  }, [])

  return null
}

