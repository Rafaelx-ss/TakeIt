import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Reporte } from "@/types/reportes"
import { ReportesService } from "@/services/reportes.service"

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  ID: string;
  Tipo: string;
  descripcion: string | number;
  detalle: string | number;
  nombreEvento: string;
  nombreUsuario: string;
  fecha: string;
}

export default function ReportModal({ isOpen, onClose, ID, Tipo, descripcion, detalle, nombreEvento, nombreUsuario, fecha}: ReportModalProps) {

    const [dataReportes, setDataReportes] = useState<Reporte[]>([]);

  useEffect(() => {
    const fetchdatReportes = async () => {
          try {
            const data = await ReportesService.reportesEventos(ID);
            setDataReportes(data);
          } catch (error) {
            console.error('Error al cargar reportes:', error);
          }
        };
  });


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 text-white border border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-yellow-400 text-xl font-bold">Detalles del reporte</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3">
          <p><strong>Participante:</strong> {nombreUsuario}</p>
          <p><strong>Tipo:</strong> {Tipo}</p>
          <p><strong>Descripción:</strong> {descripcion}</p>
          <p><strong>Fecha:</strong> {fecha}</p>
          <p><strong>Evento:</strong> {nombreEvento}</p>
          <div>
            <strong>Detalles:</strong>
            <div className="mt-2 p-2 bg-zinc-800 border border-zinc-700 rounded-md h-36 overflow-y-auto text-sm text-gray-300">
              {detalle}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2">Marcar como resuelto</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">Contactar con el usuario</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
