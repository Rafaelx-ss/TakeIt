'use client'

import { ResponsiveContainer, Treemap, Tooltip } from 'recharts'

interface TreemapData {
  name: string
  size: number
  children?: TreemapData[]
}

interface TreemapChartProps {
  data: TreemapData[]
}

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D']

export function TreemapChart({ data }: TreemapChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <Treemap
        data={data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      >
        <Tooltip content={<CustomTooltip />} />
      </Treemap>
    </ResponsiveContainer>
  )
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-background p-2 border border-border rounded-md shadow-md">
        <p className="font-bold">{data.name}</p>
        <p>Tamaño: {data.size}</p>
      </div>
    )
  }
  return null
}

