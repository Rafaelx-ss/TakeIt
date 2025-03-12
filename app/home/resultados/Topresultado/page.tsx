"use client";

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { ResultadoService } from "@/services/resultados.service";
import { useSearchParams } from "next/navigation";
import { TopUsuario } from '@/types/resultados';

export default function TopresutadoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataResultados, setDataResultados] = useState<TopUsuario[]>([]);
  const searchParams = useSearchParams();
  const eventoID = searchParams.get("EventoID");

  useEffect(() => {
    const fetchdatEventos = async () => {
      try {
        if (eventoID) {
          const data = await ResultadoService.ParticipanteEvento(eventoID);
          setDataResultados(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error('Error al cargar reportes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchdatEventos();
  }, [eventoID]);

  return (
    <div className="p-6 bg-neutral-900 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Participantes del evento</h1>
      <div className="overflow-hidden rounded-lg border border-gray-700">
        <Table className="w-full text-left">
          <TableHeader className="bg-gray-800 text-gray-300">
            <TableRow>
              <TableHead className="px-4 py-2">Puesto</TableHead>
              <TableHead className="px-4 py-2">Nombre</TableHead>
              <TableHead className="px-4 py-2">Lugar de origen</TableHead>
              <TableHead className="px-4 py-2">Eventos previos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={`skeleton-${index}`} className="bg-gray-800">
                  <TableCell><Skeleton className="h-5 w-12" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-16" /></TableCell>
                </TableRow>
              ))
            ) : dataResultados.length > 0 ? (
              dataResultados.map((Usuario) => (
                <TableRow key={Usuario.usuarioID} className="border-b border-gray-700 hover:bg-gray-800">
                  <TableCell className="px-4 py-2 font-bold  text-dorado">{Usuario.posicion}</TableCell>
                  <TableCell className="px-4 py-2">{Usuario.nombreUsuario}</TableCell>
                  <TableCell className="px-4 py-2">{Usuario.municipioDireccion}</TableCell>
                  <TableCell className="px-4 py-2">{Usuario.eventosPrevios}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4 text-dorado-400">
                  El evento no tiene resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}