"use client"; 

import { AreaChartComponent } from '@/components/dashboard/areaChart'
import { useEffect, useState } from "react";
import { DasboardService } from "@/services/dashboard.service";
import { getUsuario } from '@/context/auth'

export default function GraphPage() {
  const usuarioID = getUsuario().usuarioID;

  const [datag, setData] = useState<{ name: string; participants: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); 
        const data = await DasboardService.Grafica(usuarioID);
        setData(data);
      } catch (error) {
        console.error('Error al cargar reportes:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [usuarioID]);

  return (
    <section className="text-white py-6 px-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Tendencia de Participantes</h2>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <p className="text-gray-400">Cargando datos...</p>
        </div>
      ) : (
        datag.length > 0 ? (
          <AreaChartComponent data={datag} />
        ) : (
          <p className="text-gray-400">No hay datos disponibles.</p>
        )
      )}
    </section>
  );
}
