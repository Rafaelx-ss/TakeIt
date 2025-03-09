import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Medal, BarChart } from 'lucide-react';
import { MetricCard } from '@/components/patrocinadores/metric-card';
const Header = () => {
  return (
    <header className="text-white py-6 px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex justify-center gap-8">
        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participantes totales</CardTitle>
            <User className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eventos completados</CardTitle>
            <Medal className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de actividad</CardTitle>
            <BarChart className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43%</div>
          </CardContent>
        </Card>
      </div>
    </header>
  );
};

export default Header;
