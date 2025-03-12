import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, Clock, DollarSign, Users } from "lucide-react";
import { ResultadoService } from "@/services/resultados.service"
import { useRouter } from "next/navigation";

// Definir las props del modal
interface ResultadoModalProps {
  isOpen: boolean;
  onClose: () => void;
  EventoID?: number | string;
  duracionEvento: string;
  totalParticipantes? : number;
  totalIngresos? : number;

}

export default function ResultadoModal({ isOpen, onClose, EventoID, duracionEvento , totalParticipantes,totalIngresos}: ResultadoModalProps) {

    const router = useRouter();

    const handleClick = () => {
      router.push(`/home/resultados/Topresultado?EventoID=${EventoID}`);
    };
    
    const Recurrentes = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 text-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Detalles</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <User className="text-yellow-500" size={20} />
              <span>Participantes totales</span>
            </div>
            <span className="font-semibold">{totalParticipantes}</span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-500" size={20} />
              <span>Duración del evento</span>
            </div>
            <span className="font-semibold">{duracionEvento}</span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <DollarSign className="text-yellow-500" size={20} />
              <span>Ingresos totales</span>
            </div>
            <span className="font-semibold">${totalIngresos}</span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <Users className="text-yellow-500" size={20} />
              <span>Participantes Recurrentes</span>
            </div>
            <span className="font-semibold">{Recurrentes}%</span>
          </div>

          <div className="text-center mt-4">
          <button 
                className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
                onClick={handleClick}
                >
                Ver participantes
                </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}