'use client'

import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts'

interface BubbleChartProps {
  data: {
    name: string
    x: number
    y: number
    z: number
  }[]
}

export function BubbleChart({ data }: BubbleChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="Eje X" unit="px" />
        <YAxis dataKey="y" name="Eje Y" unit="px" />
        <ZAxis dataKey="z" range={[64, 144]} name="Tamaño" unit="px" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Datos" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

