'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Ene', ventas: 4000, gastos: 2400 },
  { name: 'Feb', ventas: 3000, gastos: 1398 },
  { name: 'Mar', ventas: 2000, gastos: 9800 },
  { name: 'Abr', ventas: 2780, gastos: 3908 },
  { name: 'May', ventas: 1890, gastos: 4800 },
  { name: 'Jun', ventas: 2390, gastos: 3800 },
]

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ventas" fill="hsl(var(--chart-1))" />
        <Bar dataKey="gastos" fill="hsl(var(--chart-2))" />
      </BarChart>
    </ResponsiveContainer>
  )
}

