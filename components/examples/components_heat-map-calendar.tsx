'use client'

import { useState } from 'react'
import { subDays, format, startOfWeek, addDays, isSameDay } from 'date-fns'
import { es } from 'date-fns/locale'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HeatMapData {
  date: Date
  value: number
}

interface HeatMapCalendarProps {
  data: HeatMapData[]
}

const getColor = (value: number) => {
  if (value === 0) return 'bg-gray-100'
  if (value < 3) return 'bg-green-200'
  if (value < 5) return 'bg-green-300'
  if (value < 7) return 'bg-green-400'
  return 'bg-green-500'
}

export function HeatMapCalendar({ data }: HeatMapCalendarProps) {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)

  const endDate = new Date()
  const startDate = subDays(endDate, 364)

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  const weeks = []
  let currentDate = startOfWeek(startDate)

  while (currentDate <= endDate) {
    const week = []
    for (let i = 0; i < 7; i++) {
      const day = addDays(currentDate, i)
      const dataPoint = data.find(d => isSameDay(d.date, day))
      week.push({
        date: day,
        value: dataPoint ? dataPoint.value : 0,
      })
    }
    weeks.push(week)
    currentDate = addDays(currentDate, 7)
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex flex-col">
        <div className="flex mb-2">
          <div className="w-8" />
          {weekDays.map((day, index) => (
            <div key={index} className="w-4 mx-1 text-center text-xs">
              {day}
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col mr-2">
            {weeks.map((_, index) => (
              <div key={index} className="h-4 w-8 text-xs text-right">
                {index % 4 === 0 && format(weeks[index][0].date, 'MMM', { locale: es })}
              </div>
            ))}
          </div>
          <div>
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex">
                {week.map((day, dayIndex) => (
                  <TooltipProvider key={dayIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-4 h-4 m-1 rounded-sm ${getColor(day.value)}`}
                          onMouseEnter={() => setHoveredDate(day.date)}
                          onMouseLeave={() => setHoveredDate(null)}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{format(day.date, 'PP', { locale: es })}</p>
                        <p>{day.value} contribuciones</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

