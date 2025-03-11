"use client"; 

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Medal, BarChart } from 'lucide-react';
import { MetricCard } from '@/components/patrocinadores/metric-card';
import { useEffect, useState } from "react";
import { DasboardService } from "@/services/dashboard.service";
import { getUsuario } from '@/context/auth'

const Header = () => {

  const [totalparti, setTotalparti] = useState<number>(0);
  const [eventosfin, setEventosfin] = useState<number>(0);

  const usuarioID = getUsuario().usuarioID
  useEffect(() => {
    const fetchReportes = async () => {
          try {
            const data = await DasboardService.totalparticipantes(usuarioID);
            setTotalparti(data.TotalEventos);
          } catch (error) {
            console.error('Error al cargar reportes:', error);
          }
    };
        const fetchcatidad = async () => {
          try {
            const data = await DasboardService.cantidadEventosTerminados(usuarioID);
            console.log(data)
            setEventosfin(data.cantidadEventosTerminados);
          } catch (error) {
            console.error('Error al cargar reportes:', error);
          } 
    };
    fetchReportes();
    fetchcatidad();
  }, [usuarioID]);

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
            <div className="text-2xl font-bold">{totalparti}</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eventos completados</CardTitle>
            <Medal className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{eventosfin}</div>
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

