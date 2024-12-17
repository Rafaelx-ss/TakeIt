'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, UsersIcon, DollarSignIcon, GroupIcon, HandHeartIcon } from 'lucide-react';
import { ProductCard } from '@/components/ui/product-card'
import { MetricCard } from '@/components/patrocinadores/metric-card';
import { SponsorCard } from "@/components/patrocinadores/sponsorcard";

const mockData = [
{
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/1509px-Pepsi_logo_2014.svg.png",
    event: "Festival De Música",
    date: "15/10/23",
    status: "Activo",
},
{
    logo: "https://www.utmetropolitana.edu.mx/Publicaciones/recursos/BotonImagen/logo%20UTM-01.png",
    event: "Feria de la tecnología",
    date: "25/11/23",
    status: "Activo",
},
{
    logo: "https://cdn-icons-png.flaticon.com/512/10393/10393636.png",
    event: "Carrera de relevos",
    date: "10/11/23",
    status: "Inactivo",
},
{
    logo: "https://img.freepik.com/vector-premium/logotipo-contraccion_578229-259.jpg?semt=ais_hybrid",
    event: "Copa Gamer",
    date: "30/11/23",
    status: "Activo",
},
];

export default function Page() {
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
            <Button size="sm" variant="outline">
            Ver Más
            </Button>
        </div>

      {/* Sponsor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockData.map((sponsor, index) => (
                <SponsorCard
                    key={index}
                    logo={sponsor.logo}
                    event={sponsor.event}
                    date={sponsor.date}
                    status={sponsor.status}
                />
            ))}

    {/* Add New Sponsor Card */}
        <Card className="p-4 flex flex-col items-center justify-center text-center bg-dorado text-black cursor-pointer hover:bg-secondary">
            <Plus className="h-8 w-8 mb-2" />
            <p className="text-sm font-semibold">Agregar Nuevo Patrocinador</p>
        </Card>
    </div>
    </div>
);
}