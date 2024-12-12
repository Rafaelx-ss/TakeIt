"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Plus, Pencil, Trash } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Evento {
    eventosID: number
    nombreEvento: string
    fechaEvento: string
    horaEvento: string
    lugarEvento: string
    direccionEvento: string
    costoEvento: number
    maximoParticipantesEvento: string
    activoEvento: boolean
}

const mockEventos: Evento[] = [
    {
        eventosID: 1,
        nombreEvento: "Conferencia de Tecnología",
        fechaEvento: "2024-12-15",
        horaEvento: "09:00:00",
        lugarEvento: "Centro de Convenciones Mérida",
        direccionEvento: "Avenida Tecnológica #500",
        costoEvento: 250.00,
        maximoParticipantesEvento: "500",
        activoEvento: true
    },
    {
        eventosID: 2,
        nombreEvento: "Taller de Fotografía",
        fechaEvento: "2024-12-20",
        horaEvento: "15:00:00",
        lugarEvento: "Casa de la Cultura",
        direccionEvento: "Calle Arte #200 x 45 y 47",
        costoEvento: 150.00,
        maximoParticipantesEvento: "30",
        activoEvento: true
    },
    {
        eventosID: 3,
        nombreEvento: "Concierto de Rock",
        fechaEvento: "2024-12-31",
        horaEvento: "22:00:00",
        lugarEvento: "Parque Central",
        direccionEvento: "Plaza Principal",
        costoEvento: 300.00,
        maximoParticipantesEvento: "1000",
        activoEvento: false
    },
    {
        eventosID: 4,
        nombreEvento: "Exposición de Arte Moderno",
        fechaEvento: "2024-12-10",
        horaEvento: "10:00:00",
        lugarEvento: "Museo de Arte Contemporáneo",
        direccionEvento: "Avenida Cultura #123",
        costoEvento: 75.00,
        maximoParticipantesEvento: "200",
        activoEvento: false
    },
    {
        eventosID: 5,
        nombreEvento: "Maratón Anual",
        fechaEvento: "2025-01-05",
        horaEvento: "06:00:00",
        lugarEvento: "Estadio Olímpico",
        direccionEvento: "Circuito Deportivo",
        costoEvento: 50.00,
        maximoParticipantesEvento: "1000",
        activoEvento: true
    },
    {
        eventosID: 6,
        nombreEvento: "Clase de Yoga al Aire Libre",
        fechaEvento: "2024-12-17",
        horaEvento: "07:30:00",
        lugarEvento: "Parque de la Salud",
        direccionEvento: "Calle Verde #45",
        costoEvento: 0.00,
        maximoParticipantesEvento: "50",
        activoEvento: true
    },
    {
        eventosID: 7,
        nombreEvento: "Feria Gastronómica",
        fechaEvento: "2024-12-25",
        horaEvento: "12:00:00",
        lugarEvento: "Plaza de la Comida",
        direccionEvento: "Mercado Principal",
        costoEvento: 20.00,
        maximoParticipantesEvento: "300",
        activoEvento: false
    },
    {
        eventosID: 8,
        nombreEvento: "Charla Motivacional",
        fechaEvento: "2024-12-18",
        horaEvento: "18:00:00",
        lugarEvento: "Auditorio Municipal",
        direccionEvento: "Calle Esperanza #33",
        costoEvento: 200.00,
        maximoParticipantesEvento: "100",
        activoEvento: true
    },
    {
        eventosID: 9,
        nombreEvento: "Noche de Cine al Aire Libre",
        fechaEvento: "2024-12-22",
        horaEvento: "20:30:00",
        lugarEvento: "Parque de los Sueños",
        direccionEvento: "Calle Fantasía #99",
        costoEvento: 10.00,
        maximoParticipantesEvento: "150",
        activoEvento: true
    },
    {
        eventosID: 10,
        nombreEvento: "Curso Intensivo de Programación",
        fechaEvento: "2025-01-15",
        horaEvento: "09:00:00",
        lugarEvento: "Escuela de Software",
        direccionEvento: "Avenida Código #777",
        costoEvento: 500.00,
        maximoParticipantesEvento: "40",
        activoEvento: false
    },
    {
        eventosID: 11,
        nombreEvento: "Festival de Música Electrónica",
        fechaEvento: "2025-02-05",
        horaEvento: "19:00:00",
        lugarEvento: "Arena de Eventos",
        direccionEvento: "Avenida Electrónica #100",
        costoEvento: 350.00,
        maximoParticipantesEvento: "3000",
        activoEvento: true
    },
    {
        eventosID: 12,
        nombreEvento: "Maratón de Ciclismo",
        fechaEvento: "2025-02-20",
        horaEvento: "08:00:00",
        lugarEvento: "Calle Libre",
        direccionEvento: "Calle del Deportista #10",
        costoEvento: 100.00,
        maximoParticipantesEvento: "1500",
        activoEvento: true
    },
    {
        eventosID: 13,
        nombreEvento: "Festival Gastronómico Internacional",
        fechaEvento: "2025-03-15",
        horaEvento: "11:00:00",
        lugarEvento: "Plaza del Sol",
        direccionEvento: "Avenida Gusto #300",
        costoEvento: 80.00,
        maximoParticipantesEvento: "2000",
        activoEvento: true
    },
    {
        eventosID: 14,
        nombreEvento: "Exhibición de Autos Clásicos",
        fechaEvento: "2025-04-10",
        horaEvento: "09:00:00",
        lugarEvento: "Parque Automovilístico",
        direccionEvento: "Avenida Clásica #50",
        costoEvento: 120.00,
        maximoParticipantesEvento: "800",
        activoEvento: false
    },
    {
        eventosID: 15,
        nombreEvento: "Festival de Danza Folklórica",
        fechaEvento: "2025-05-01",
        horaEvento: "17:00:00",
        lugarEvento: "Teatro Nacional",
        direccionEvento: "Calle Tradición #400",
        costoEvento: 150.00,
        maximoParticipantesEvento: "500",
        activoEvento: true
    },
    {
        eventosID: 16,
        nombreEvento: "Conferencia de Innovación en Salud",
        fechaEvento: "2025-06-10",
        horaEvento: "08:30:00",
        lugarEvento: "Centro de Convenciones",
        direccionEvento: "Avenida de la Salud #250",
        costoEvento: 250.00,
        maximoParticipantesEvento: "1000",
        activoEvento: true
    },
    {
        eventosID: 17,
        nombreEvento: "Encuentro de Emprendedores",
        fechaEvento: "2025-07-05",
        horaEvento: "10:00:00",
        lugarEvento: "Auditorio Principal",
        direccionEvento: "Calle Innovación #150",
        costoEvento: 200.00,
        maximoParticipantesEvento: "300",
        activoEvento: true
    },
    {
        eventosID: 18,
        nombreEvento: "Exposición de Fotografía Contemporánea",
        fechaEvento: "2025-08-20",
        horaEvento: "18:00:00",
        lugarEvento: "Galería de Arte",
        direccionEvento: "Calle Arte #500",
        costoEvento: 50.00,
        maximoParticipantesEvento: "100",
        activoEvento: false
    },
    {
        eventosID: 19,
        nombreEvento: "Feria Internacional del Libro",
        fechaEvento: "2025-09-01",
        horaEvento: "09:00:00",
        lugarEvento: "Centro Cultural",
        direccionEvento: "Calle Literatura #75",
        costoEvento: 30.00,
        maximoParticipantesEvento: "2000",
        activoEvento: true
    },
    {
        eventosID: 20,
        nombreEvento: "Campamento de Aventura",
        fechaEvento: "2025-10-10",
        horaEvento: "08:00:00",
        lugarEvento: "Parque Natural",
        direccionEvento: "Camino del Bosque #600",
        costoEvento: 120.00,
        maximoParticipantesEvento: "100",
        activoEvento: false
    },
];


    export default function EventosPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "finished">("active")
    const [eventos] = useState<Evento[]>(mockEventos)

    const filteredEventos = eventos.filter(evento =>
        evento.nombreEvento.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterStatus === "all" || 
            (filterStatus === "active" && evento.activoEvento) ||
            (filterStatus === "finished" && !evento.activoEvento))
    )

    const handleEdit = (id: number) => {
        console.log(`Editar evento con ID: ${id}`)
    }

    const handleDelete = (id: number) => {
        console.log(`Eliminar evento con ID: ${id}`)
    }

    return (
        <div className="p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-foreground">Eventos actuales</h1>
                <Button size="lg" variant="outline">
                    <Plus className="h-4 w-4" />
                    Crear evento
                </Button>
            </div>

            <div className="mb-6 flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                    placeholder="Buscar eventos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
                </div>
                <Select value={filterStatus} onValueChange={(value: "all" | "active" | "finished") => setFilterStatus(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos los eventos</SelectItem>
                        <SelectItem value="active">En curso</SelectItem>
                        <SelectItem value="finished">Terminados</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Nombre</TableHead>
                            <TableHead>Fecha y Hora</TableHead>
                            <TableHead>Lugar</TableHead>
                            <TableHead>Dirección</TableHead>
                            <TableHead>Costo</TableHead>
                            <TableHead>Participantes</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredEventos.map((evento) => (
                        <TableRow key={evento.eventosID}>
                            <TableCell className="font-medium">{evento.nombreEvento}</TableCell>
                            <TableCell>
                                {new Date(evento.fechaEvento).toLocaleDateString()}
                                <br />
                                {evento.horaEvento}
                            </TableCell>
                            <TableCell>{evento.lugarEvento}</TableCell>
                            <TableCell>
                                <div className="max-w-[200px] truncate" title={evento.direccionEvento}>
                                    {evento.direccionEvento}
                                </div>
                            </TableCell>
                            <TableCell>${evento.costoEvento.toFixed(2)}</TableCell>
                            <TableCell>{evento.maximoParticipantesEvento}</TableCell>
                            <TableCell>
                                <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap
                                    ${evento.activoEvento 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'}
                                    xs:px-3 xs:py-1.5 xs:text-xs`}
                                >
                                    {evento.activoEvento ? 'En curso' : 'Terminado'}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                onClick={() => handleEdit(evento.eventosID)}
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 p-0 text-dorado hover:text-black hover:bg-dorado"
                                                >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Editar evento</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                onClick={() => handleDelete(evento.eventosID)}
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 p-0 text-error hover:text-error-hover hover:bg-error-bg-hover hover:border-error"
                                                >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Eliminar evento</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

