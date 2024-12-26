"use client";

import { useState, useEffect } from 'react';
import { UsersIcon, Medal, BarChartIcon } from 'lucide-react';
import { MetricCard } from '@/components/ui/metric-card';
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

interface Report {
  id: number;
  participant: string;
  type: string;
  status: string;
}

export default function ReportesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState<Report[]>([]);

  // Simulating data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setReports([
        { id: 1, participant: "Juan Pérez", type: "Queja", status: "Pending" },
        { id: 2, participant: "María Lopez", type: "Sugerencia", status: "Reviewed" },
        { id: 3, participant: "Ariel Martinez", type: "Queja", status: "Pending" },
        { id: 4, participant: "HectorMen86", type: "Queja", status: "Pending" },
        { id: 5, participant: "ChuloBob_CR7", type: "Queja", status: "Pending" },
      ] as Report[]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-background text-text">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4 text-foreground">Resumen</h1>
      <div className="p-6 bg-background">
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-8">
              <MetricCard
              title="Participantes totales"
              value="1442"
              description="Total de participantes en todos los eventos"
              icon={UsersIcon}
              />

              <MetricCard
              title="Reportes totales"
              value="5"
              description="Conteo de todos los reportes recibidos"
              icon={Medal}
              />

              <MetricCard
              title="Experiencia de usuario"
              value="98%"
              description="Porcentaje de satisfacción total"
              icon={BarChartIcon}
              />
          </div>
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
            reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.participant}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap
                    ${report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      report.status === 'Reviewed' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'}
                    xs:px-3 xs:py-1.5 xs:text-xs`}
                  >
                    {report.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    Mostrar detalles
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

