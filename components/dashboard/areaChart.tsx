'use client'

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface AreaChartProps {
  data: {
    name: string
    participants: number
  }[]
}

export function AreaChartComponent({ data }: AreaChartProps) {
  return (
    <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '8px' }}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B7A36" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8B7A36" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#FFF" />
          <YAxis stroke="#FFF" />
          <Tooltip
            contentStyle={{ backgroundColor: '#222', border: 'none', color: '#FFF' }}
            itemStyle={{ color: '#FFF' }}
          />
          <Area
            type="monotone"
            dataKey="participants"
            stroke="#FFF"
            fill="url(#colorArea)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
