'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CircularProgressProps {
  progress: number
  size?: number
  strokeWidth?: number
  circleColor?: string
  progressColor?: string
}

export function CircularProgress({
  progress,
  size = 100,
  strokeWidth = 10,
  circleColor = '#e6e6e6',
  progressColor = '#3b82f6'
}: CircularProgressProps) {
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    setCurrentProgress(progress)
  }, [progress])

  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <motion.circle
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - (currentProgress / 100) * circumference,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (currentProgress / 100) * circumference }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
        style={{ color: progressColor }}
      >
        {Math.round(currentProgress)}%
      </div>
    </div>
  )
}

