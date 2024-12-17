'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Edit, Trash2 } from 'lucide-react';

interface SponsorCardProps {
    logo: string;
    event: string;
    date: string;
    status: "Activo" | "Inactivo" | string;
}

export function SponsorCard({ logo, event, date, status }: SponsorCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg flex flex-col m-4"
        >
            {/* Imagen del patrocinador */}
            <div className="relative w-full h-48 bg-background flex items-center justify-center">
                <Image
                    src={logo}
                    alt={event}
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>

            {/* Contenido del patrocinador */}
            <div className="p-4 text-center flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-1">{event}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Fecha: {date}</p>
                </div>

                {/* Estado del patrocinador */}
                <div className="flex items-center justify-center gap-1 mt-2">
                    {status === 'Activo' ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                        <XCircle className="w-5 h-5 text-error" />
                    )}
                    <span
                        className={`text-sm font-medium ${
                            status === 'Activo' ? 'text-success' : 'text-error'
                        }`}
                    >
                        {status}
                    </span>
                </div>

                {/* Botones de acción */}
                <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-background text-dorado py-2 px-2 rounded-md flex items-center justify-center">
                        <Edit className="w-5 h-5 mr-2" />
                    </button>

                    <button className="flex-1 bg-error text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-error/90 transition-colors">
                        <Trash2 className="w-5 h-5 mr-2" />
                        Eliminar
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
