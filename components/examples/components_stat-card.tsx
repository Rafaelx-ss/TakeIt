'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface StatCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  icon: React.ReactNode
}

export function StatCard({ title, value, prefix = '', suffix = '', icon }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(value)
    }, 100)

    return () => clearTimeout(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-primary">{icon}</div>
      </div>
      <div className="text-3xl font-bold">
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {count}
        </motion.span>
        {suffix}
      </div>
    </motion.div>
  )
}

