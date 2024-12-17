import { AreaChartComponent } from '@/components/dashboard/areaChart'


const data = [
  { name: 'Enero', participants: 0 },
  { name: 'Febrero', participants: 50 },
  { name: 'Marzo', participants: 100 },
  { name: 'Abril', participants: 200 },
]

export default function GraphPage() {
  return (
    <section className="text-white py-6 px-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Tendencia de Participantes</h2>
      <AreaChartComponent data={data} />
    </section>
  )
}
