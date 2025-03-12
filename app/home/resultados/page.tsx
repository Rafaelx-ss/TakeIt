"use client";

import { useState, useEffect } from 'react';
import { User, Medal, BarChart, Calendar, Clock8} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import ResultadoModal from "@/components/modal/ResultadoModal";
import { getUsuario } from '@/context/auth'
import { DasboardService } from "@/services/dashboard.service"
import { ReportesService } from "@/services/reportes.service"
import { ResultadoService } from "@/services/resultados.service"
import { Evento } from "@/types/eventos"


interface Report {
  id: number;
  participant: string;
  type: string;
  status: string;
}

export default function ResultadosPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState<Report[]>([]);
  const [totalEventos, setTotalEventos] = useState<number>(0);
  const [totalReportes, setTotalReportes] = useState<number>(0);
  const [dataResultados, setDataResultados] = useState<Evento[]>([]);
  const [error, setError] = useState<string | null>(null)
  const [selectedResultados, setSelectedResultados] = useState<Evento | null>(null);
  const [eventosfin, setEventosfin] = useState<number>(0);
  const [totalhoras, setTotalhoras] = useState<number>(0);

  const usuarioID = getUsuario().usuarioID

  useEffect(() => {
    if (!usuarioID) return; // No ejecutar si usuarioID no está definido

    const fetchData = async () => {
      try {
        const data = await DasboardService.totalparticipantes(usuarioID);
        setTotalEventos(data.TotalEventos);
      } catch (error) {
        console.error('Error al cargar eventos:', error);
        setError('Hubo un problema al cargar los reportes. Por favor, intente de nuevo más tarde');
      }
    };

    const fetchReportes = async () => {
      try {
        const data = await ReportesService.reportestotales(usuarioID);
        setTotalReportes(data.reportesTotal);
      } catch (error) {
        console.error('Error al cargar reportes:', error);
      }
    };


    const fetchdatEventos = async () => {
      try {
        const data = await ResultadoService.Eventosadmin(usuarioID);
        setDataResultados(data.data);
        console.log(data)
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

  const fetchduracionEvents= async () => {
    try {
      const data = await ResultadoService.duracionEventostotales(usuarioID);
      console.log(data)
      setTotalhoras(data);
    } catch (error) {
      console.error('Error al cargar reportes:', error);
    } 
};

    fetchdatEventos();
    fetchReportes();
    fetchData();
    fetchduracionEvents();
    fetchcatidad();
    setIsLoading(false);    
  }, [usuarioID]); 
;

  const [open, setOpen] = useState(false);




  return (
    <div className="p-6 bg-background text-text">
      {/* Header */}



      <div className="flex justify-center gap-8 mb-4">
        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de participantes</CardTitle>
            <User className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEventos}</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eventos finalizados</CardTitle>
            <Calendar className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{eventosfin}</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas totales</CardTitle>
            <Clock8 className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalhoras}</div>
          </CardContent>
        </Card>
      </div>


      <h1 className="text-2xl font-bold mb-4 text-foreground">Resultados</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Eventos</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Participantes</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <TableRow key={`skeleton-${index}`}>
                <TableCell><Skeleton className="h-5 w-[50px]" /></TableCell>
                <TableCell><Skeleton className="h-5 w-[150px]" /></TableCell>
                <TableCell><Skeleton className="h-5 w-[120px]" /></TableCell>
                <TableCell><Skeleton className="h-5 w-[80px]" /></TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-8 w-[100px] ml-auto" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            dataResultados.map((Eventos) => (
              <TableRow key={Eventos.eventoID}>
                 <TableCell>{Eventos.nombreEvento}</TableCell>
                <TableCell>{Eventos.nombreEvento}</TableCell>
                <TableCell>{Eventos.fechaEvento}</TableCell>
                <TableCell>{Eventos.totalParticipantes}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => {
                      setSelectedResultados(Eventos); 
                      setOpen(true);
                    }}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                   Ver Detalles
                  </Button>
                </TableCell>
                {selectedResultados && (
                  <ResultadoModal isOpen={open} onClose={() => setOpen(false)} 
                  EventoID={selectedResultados.eventoID}
                  duracionEvento = {selectedResultados.duracionEvento}
                  totalParticipantes ={selectedResultados.totalParticipantes}
                  totalIngresos = {selectedResultados.totalIngresos}
                  />
                )}

              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      
    </div>
  );
}