'use client'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

interface CandlestickData {
  date: string
  open: number
  high: number
  low: number
  close: number
}

interface CandlestickChartProps {
  data: CandlestickData[]
}

export function CandlestickChartComponent({ data }: CandlestickChartProps) {
  const formatData = (data: CandlestickData[]) => {
    return data.map(item => ({
      ...item,
      highLow: [item.low, item.high],
      openClose: [item.open, item.close],
    }))
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formatData(data)}>
        <XAxis dataKey="date" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background p-2 border border-border rounded-md shadow-md">
                  <p className="font-bold">{data.date}</p>
                  <p>Open: {data.open}</p>
                  <p>High: {data.high}</p>
                  <p>Low: {data.low}</p>
                  <p>Close: {data.close}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar
          dataKey="highLow"
          fill="transparent"
          stroke="hsl(var(--chart-1))"
          strokeWidth={1}
        />
        <Bar
          dataKey="openClose"
          fill={(data) => (data.open > data.close ? "hsl(var(--chart-2))" : "hsl(var(--chart-1))")}
          stroke="transparent"
          strokeWidth={0}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

