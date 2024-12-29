'use client';

import { Button } from '@/components/ui/button';

import { 
    Plus, 
    UsersIcon, 
    DollarSignIcon, 
    HandHeartIcon 
} from 'lucide-react';

import { MetricCard } from '@/components/patrocinadores/metric-card';
import { SponsorCard } from "@/components/patrocinadores/sponsorcard";
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import { PatrocinadoresService } from '@/services/patrocinadores.service';
import { Patrocinador } from '@/types/patrocinadores';
import { useAuth } from '@/context/auth';
import { useModal } from '@/context/ModalContext';

export default function Page() {
    const [sponsors, setSponsors] = useState<Patrocinador[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();
    const { showModal } = useModal();
    const usuarioID = auth.user?.usuarioID; 

    useEffect(() => {
        const fetchSponsors = async () => {
            if (usuarioID) {
                const data = await PatrocinadoresService.obtenerPatrocinadores(usuarioID);
                if (data) {
                    setSponsors(data);
                }
                setIsLoading(false);
            }
        };
        fetchSponsors();
    }, [usuarioID]);

    const handleDelete = async (patrocinadorID: number) => {
        showModal({
            title: 'Confirmar eliminación',
            description: '¿Estás seguro de que deseas eliminar este patrocinador?',
            variant: 'warning',
            onConfirm: async () => {
                try {
                    await PatrocinadoresService.eliminarPatrocinador(patrocinadorID.toString());
                    setSponsors(sponsors.filter(sponsor => sponsor.patrocinadorID !== patrocinadorID));
                } catch (error) {
                    console.error('Error al eliminar el patrocinador:', error);
                }
            },
        });
    };

    return (

    <div className="p-6 bg-background text-text">
      {/* Header */}
        <h1 className="text-2xl font-bold mb-4 text-foreground">Patrocinios</h1>

        {/* Stats Section */}

        <div className="grid grid-cols-3 gap-4 mb-8">
            <MetricCard
            title="Total de patrocinadores"
            value="15"
            description="Patrocinadores registrados"
            icon={HandHeartIcon}
            />

            <MetricCard
            title="Fondos recaudados"
            value="$25,000 USD"
            description="Ingresos totales del ultimo mes"
            icon={DollarSignIcon}
            />

            <MetricCard
            title="Patrocinadores por evento"
            value="5"
            description="Promedio de patrocinadores por evento"
            icon={UsersIcon}
            />
        </div>
        
      {/* Recent Sponsors Section */}
        <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-foreground">Patrocinadores Recientes</h2>
            <Button size="lg" variant="outline" >
                <Plus className="h-4 w-4" />
                Agregar Nuevo
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="p-4 border rounded-lg">
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                </div>
                ))
            : sponsors
                .filter((sponsor) => sponsor.estadoPatrocinador === true)
                .map((sponsor) => (
                <SponsorCard
                    key={sponsor.patrocinadorID}
                    patrocinadorID={sponsor.patrocinadorID} 
                    logo={sponsor.image_url || '/default-logo.png'} 
                    namepatro={sponsor.nombrePatrocinador}
                    representative={sponsor.representantePatrocinador}
                    activoPatrocinador={sponsor.activoPatrocinador ? 1 : 0} 
                    onDelete={handleDelete}
                />
                ))}
        </div>
    </div>
);
}