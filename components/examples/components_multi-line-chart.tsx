'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Ene', producto1: 4000, producto2: 2400, producto3: 1800 },
  { name: 'Feb', producto1: 3000, producto2: 1398, producto3: 2800 },
  { name: 'Mar', producto1: 2000, producto2: 9800, producto3: 3200 },
  { name: 'Abr', producto1: 2780, producto2: 3908, producto3: 2500 },
  { name: 'May', producto1: 1890, producto2: 4800, producto3: 3800 },
  { name: 'Jun', producto1: 2390, producto2: 3800, producto3: 4300 },
]

export function MultiLineChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="producto1" stroke="hsl(var(--chart-1))" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="producto2" stroke="hsl(var(--chart-2))" />
        <Line type="monotone" dataKey="producto3" stroke="hsl(var(--chart-3))" />
      </LineChart>
    </ResponsiveContainer>
  )
}

