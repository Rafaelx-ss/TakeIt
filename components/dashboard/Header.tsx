import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Medal, BarChart } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-white py-6 px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>


      <div className="flex justify-center space-x-8">
        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg w-72">
          <CardHeader className="flex items-center space-x-3">
            <User className="text-yellow-500 w-7 h-7" />
            <CardTitle className="text-xl">Participantes totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">200</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg w-72">
          <CardHeader className="flex items-center space-x-3">
            <Medal className="text-yellow-500 w-7 h-7" />
            <CardTitle className="text-xl">Eventos completados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">2</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg w-72">
          <CardHeader className="flex items-center space-x-3">
            <BarChart className="text-yellow-500 w-7 h-7" />
            <CardTitle className="text-xl">Tasa de actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">43%</p>
          </CardContent>
        </Card>
      </div>
    </header>
  );
};

export default Header;
