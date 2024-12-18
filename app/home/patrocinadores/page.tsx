'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, UsersIcon, DollarSignIcon, GroupIcon, HandHeartIcon } from 'lucide-react';
import { ProductCard } from '@/components/ui/product-card'
import { MetricCard } from '@/components/patrocinadores/metric-card';
import { SponsorCard } from "@/components/patrocinadores/sponsorcard";
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

const mockData = [
{
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-pepsi-5-722731.png?f=webp",
    event: "PepsiCo Inc",
    date: "15/10/23",
    status: "Activo",
},
{
    logo: "https://ut-morelia.edu.mx/wp-content/uploads/2022/05/Logo-UTM-Claro.png",
    event: "TecNM (UT)",
    date: "25/11/23",
    status: "Activo",
},
{
    logo: "https://market5201.com/images/brands/galletas-donde.png",
    event: "Galletas Dondé",
    date: "10/11/23",
    status: "Inactivo",
},
{
    logo: "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitch-circle-512.png",
    event: "Twitch Interactive, Inc",
    date: "30/11/23",
    status: "Activo",
},
];

export default function Page() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (

    <div className="p-6 bg-background text-text">
      {/* Header */}
        <h1 className="text-2xl font-bold mb-4 text-foreground">Patrocinios</h1>

        {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
            title="Usuarios Totales"
            value="1,234"
            description="Total de usuarios registrados"
            icon={GroupIcon}
        />

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
            <Button size="sm" variant="outline" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
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
            : mockData.map((sponsor, index) => (
                <SponsorCard
                    key={index}
                    logo={sponsor.logo}
                    event={sponsor.event}
                    date={sponsor.date}
                    status={sponsor.status}
                />
                ))}
        </div>
    </div>
);
}