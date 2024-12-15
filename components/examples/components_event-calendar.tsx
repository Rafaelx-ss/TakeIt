'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Event {
  date: Date
  title: string
  type: 'work' | 'personal' | 'holiday'
}

interface EventCalendarProps {
  events: Event[]
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const eventsByDate = events.reduce((acc, event) => {
    const dateString = event.date.toDateString()
    if (!acc[dateString]) {
      acc[dateString] = []
    }
    acc[dateString].push(event)
    return acc
  }, {} as Record<string, Event[]>)

  const selectedEvents = selectedDate ? eventsByDate[selectedDate.toDateString()] || [] : []

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border"
        components={{
          DayContent: (props) => {
            const dateEvents = eventsByDate[props.date.toDateString()]
            return (
              <div className="relative">
                {props.day}
                {dateEvents && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="h-1 w-1 bg-primary rounded-full" />
                  </div>
                )}
              </div>
            )
          },
        }}
      />
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Eventos para {selectedDate?.toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedEvents.length > 0 ? (
            <ul className="space-y-2">
              {selectedEvents.map((event, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{event.title}</span>
                  <Badge variant={event.type === 'work' ? 'default' : event.type === 'personal' ? 'secondary' : 'outline'}>
                    {event.type}
                  </Badge>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay eventos para este día.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

