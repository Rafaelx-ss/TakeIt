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

const mockData = [
    {
        patrocinadorID: 1,
        fotoPatrocinador: "https://cdn.iconscout.com/icon/free/png-256/free-pepsi-5-722731.png?f=webp",
        nombrePatrocinador: "PepsiCo Inc",
        representantePatrocinador: "John Doe",
        activoPatrocinador: 0,
        estadoPatrocinador: 1,
    },
    {
        patrocinadorID: 2,
        fotoPatrocinador: "https://ut-morelia.edu.mx/wp-content/uploads/2022/05/Logo-UTM-Claro.png",
        nombrePatrocinador: "TecNM (UT)",
        representantePatrocinador: "Jane Smith",
        activoPatrocinador: 1,
        estadoPatrocinador: 0,
    },
    {
        patrocinadorID: 3,
        fotoPatrocinador: "https://market5201.com/images/brands/galletas-donde.png",
        nombrePatrocinador: "Galletas Dondé",
        representantePatrocinador: "Carlos Pérez",
        activoPatrocinador: 1,
        estadoPatrocinador: 1,
    },
    {
        patrocinadorID: 4,
        fotoPatrocinador: "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitch-circle-512.png",
        nombrePatrocinador: "Twitch Interactive, Inc",
        representantePatrocinador: "Mike Wilson",
        activoPatrocinador: 1,
        estadoPatrocinador: 1,
    },
    {
        patrocinadorID: 5,
        fotoPatrocinador: "https://cdn.haitrieu.com/wp-content/uploads/2022/06/logo-starbucks-original.png",
        nombrePatrocinador: "Starbucks",
        representantePatrocinador: "Alice Johnson",
        activoPatrocinador: 1,
        estadoPatrocinador: 0,
    },
    {
        patrocinadorID: 6,
        fotoPatrocinador: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        nombrePatrocinador: "IBM",
        representantePatrocinador: "Bob Brown",
        activoPatrocinador: 1,
        estadoPatrocinador: 1,
    },
];

const Modal = ({ isOpen, onClose, onSave }: any) => {
    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");
    const [representative, setRepresentative] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-80 rounded-2xl bg-slate-900">
                <div className="flex flex-col gap-2 p-8">
                    {/* Campo del logo */}
                    <input
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Imagen Logo"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                    />
                    {/* Campo del nombre */}
                    <input
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Nombre del Patrocinador"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* Campo del representante */}
                    <input
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Representante"
                        value={representative}
                        onChange={(e) => setRepresentative(e.target.value)}
                    />
                    {/* Botón Guardar */}
                    <button
                        onClick={() => {
                            onSave({ logo, name, representative });
                            onClose();
                        }}
                        className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
                    >
                        Guardar
                    </button>
                    {/* Botón Cancelar */}
                    <button
                        type="button"
                        className="inline-block cursor-pointer mt-2 rounded-md bg-gray-300 px-4 py-3.5 text-center text-sm font-semibold uppercase text-gray-800 transition duration-200 ease-in-out hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-95"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};


export default function Page() {
    const [sponsors, setSponsors] = useState(mockData);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleDeleteSponsor = (id: number) => {
        setSponsors((prevSponsors) =>
            prevSponsors.map((sponsor) =>
                sponsor.patrocinadorID === id
                    ? { ...sponsor, activoPatrocinador: 0 }
                    : sponsor
            )
        );
    };

    const handleAddSponsor = (newSponsor: any) => {
        setSponsors((prevSponsors) => [
            ...prevSponsors,
            {
                patrocinadorID: prevSponsors.length + 1,
                fotoPatrocinador: newSponsor.logo,
                nombrePatrocinador: newSponsor.name,
                representantePatrocinador: newSponsor.representative,
                activoPatrocinador: 1,
                estadoPatrocinador: 1,
            },
        ]);
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
            <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)}>
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
                .filter((sponsor) => sponsor.activoPatrocinador === 1)
                .map((sponsor) => (
                <SponsorCard
                    key={sponsor.patrocinadorID}
                    logo={sponsor.fotoPatrocinador}
                    namepatro={sponsor.nombrePatrocinador}
                    representative={sponsor.representantePatrocinador}
                    isState={sponsor.estadoPatrocinador}
                    onDelete={() => handleDeleteSponsor(sponsor.patrocinadorID)}
                />
                ))}
        </div>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddSponsor}
        />

    </div>
);
}