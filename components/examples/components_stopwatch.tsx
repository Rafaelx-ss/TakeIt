'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export function Stopwatch() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isRunning) {
      intervalId = setInterval(() => setTime(time => time + 1), 10)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000)
  const seconds = Math.floor((time % 6000) / 100)
  const milliseconds = time % 100

  const startAndStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <div className="text-center">
      <div className="text-4xl font-mono mb-4">
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}.
        {milliseconds.toString().padStart(2, '0')}
      </div>
      <div className="space-x-2">
        <Button onClick={startAndStop}>
          {isRunning ? 'Detener' : 'Iniciar'}
        </Button>
        <Button onClick={reset} variant="outline">
          Reiniciar
        </Button>
      </div>
    </div>
  )
}

