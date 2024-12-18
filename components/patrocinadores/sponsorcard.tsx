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
            className="rounded-lg overflow-hidden shadow-lg flex flex-col m-3 border border-textLight"
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
                <div className="mt-4 flex gap-2 justify-center">
                    <div className="flex gap-2 hover:text-background transition-colors">
                        <button className="p-2 rounded-md hover:bg-dorado transition-colors">
                            <Edit className="w-6 h-6" />
                        </button>
                        <button className="p-2 rounded-md hover:bg-error-hover transition-colors">
                            <Trash2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>     
            </div>
        </motion.div>
    );
}
