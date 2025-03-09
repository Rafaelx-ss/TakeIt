"use client";

import { useState, useEffect } from 'react';
import { User, Medal, BarChart } from 'lucide-react';
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
import ReportModal from "@/components/modal/ReportModal";
import { getUsuario } from '@/context/auth'
import { DasboardService } from "@/services/dashboard.service"
import { ReportesService } from "@/services/reportes.service"
import { Reporte } from "@/types/reportes"


interface Report {
  id: number;
  participant: string;
  type: string;
  status: string;
}

export default function ReportesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState<Report[]>([]);
  const [totalEventos, setTotalEventos] = useState<number>(0);
  const [totalReportes, setTotalReportes] = useState<number>(0);
  const [dataReportes, setDataReportes] = useState<Reporte[]>([]);
  const [error, setError] = useState<string | null>(null)
  const [selectedReport, setSelectedReport] = useState<Reporte | null>(null);


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


    const fetchdatReportes = async () => {
      try {
        const data = await ReportesService.reportesEventos(usuarioID);
        setDataReportes(data);
      } catch (error) {
        console.error('Error al cargar reportes:', error);
      }
    };

    fetchdatReportes();
    fetchReportes();
    fetchData();
    setIsLoading(false);    
  }, [usuarioID]); // Agregar usuarioID como dependencia para asegurarte de que se ejecuta cuando cambia

console.log(dataReportes);

  const [open, setOpen] = useState(false);




  return (
    <div className="p-6 bg-background text-text">
      {/* Header */}



      <div className="flex justify-center gap-8 mb-4">
        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de participantes en todos los eventos</CardTitle>
            <User className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEventos}</div>
          </CardContent>
          <CardDescription className="text-sm text-muted-foreground flex justify-center mt-2 mb-2">
            Total de participantes en todos los eventos
          </CardDescription>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Experiencia de usuario</CardTitle>
            <Medal className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalReportes}</div>
          </CardContent>
          <CardDescription className="text-sm text-muted-foreground flex justify-center mt-2 mb-2">
            Conteo de todos los reportes recibidos
          </CardDescription>
        </Card>

        <Card className="bg-neutral-900 text-white shadow-lg rounded-lg h-30 w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de actividad</CardTitle>
            <BarChart className="h-6 w-6 text-dorado" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
          </CardContent>
          <CardDescription className="text-sm text-muted-foreground flex justify-center mt-2 mb-2">
            Porcentaje de satisfacción total
          </CardDescription>
        </Card>
      </div>


      <h1 className="text-2xl font-bold mb-4 text-foreground">Reportes</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Participante</TableHead>
            <TableHead>Tipo de Reporte</TableHead>
            <TableHead>Estado</TableHead>
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
            dataReportes.map((report) => (
              <TableRow key={report.reporteID}>
                <TableCell>{report.reporteID}</TableCell>
                <TableCell>{report.nombreUsuario}</TableCell>
                <TableCell>{report.Tipo}</TableCell>
                <TableCell>
                    <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap
                    ${report.activoReporte === 1 ? 'bg-yellow-100 text-yellow-800' :
                      report.activoReporte === 0 ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'}`}
                    >
                    {report.activoReporte === 1 ? 'Pendiente' : 'Resuelto'}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => {
                      setSelectedReport(report); 
                      setOpen(true);
                    }}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    Mostrar detalles
                  </Button>
                </TableCell>
                {selectedReport && (
                  <ReportModal isOpen={open} onClose={() => setOpen(false)} 
                    ID={usuarioID}
                    Tipo={selectedReport.Tipo}
                    descripcion={selectedReport.descripcion}
                    detalle={selectedReport.detalle}
                    nombreEvento={selectedReport.nombreEvento}
                    nombreUsuario={selectedReport.nombreUsuario}
                    fecha={selectedReport.created_at}
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

