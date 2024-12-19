'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { 
    CheckCircle, 
    XCircle, 
    Pencil, 
    Trash 
} from 'lucide-react';

import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';

interface SponsorCardProps {
    logo: string;
    namepatro: string;
    representative: string;
    isState: number; // 1 para "Activo", 0 para "Inactivo"
    onEdit?: () => void;
    onDelete?: () => void;
}

export function SponsorCard({
    logo,
    namepatro,
    representative,
    isState,
    onEdit,
    onDelete,
}: SponsorCardProps) {
    const statusText = isState === 1 ? 'Activo' : 'Inactivo';
    const StatusIcon = isState === 1 ? CheckCircle : XCircle;
    const statusColor = isState === 1 ? 'text-success' : 'text-error';

    return (
        <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-lg overflow-hidden shadow-lg flex flex-col m-3 border border-textLight"
        >
        {/* Imagen del patrocinador */}
        <div className="relative w-full h-48 bg-background flex items-center justify-center">
            <Image
            src={logo}
            alt={namepatro}
            width={120}
            height={120}
            className="object-contain"
            />
        </div>

        {/* Contenido del patrocinador */}
        <div className="p-4 text-center flex-1 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold mb-1">{namepatro}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                    <span className="text-primary ">Representante:</span>
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                    {representative}
                </p>
            </div>

            {/* Estado del patrocinador */}
            <div className="flex items-center justify-center gap-1 mt-2">
                <StatusIcon className={`w-5 h-5 ${statusColor}`} />
                <span className={`text-sm font-medium ${statusColor}`}>
                    {statusText}
                </span>
            </div>

            {/* Botones de acción */}
            <div className="mt-4 flex gap-4 justify-center">
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                    onClick={onEdit}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 p-0 text-dorado hover:text-black hover:bg-dorado"
                    >
                    <Pencil className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Editar patrocinador</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                    onClick={onDelete}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 p-0 text-error hover:text-error-hover hover:bg-error-bg-hover hover:border-error"
                    >
                    <Trash className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Eliminar patrocinador</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
        </div>
        </motion.div>
    );
}
