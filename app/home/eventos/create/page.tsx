"use client"

import { useState, useEffect} from "react"
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
import { EventosService } from '@/services/eventos.service'
import { Evento } from '@/types/eventos'
import { Skeleton } from "@/components/ui/skeleton"


    export default function EventosPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "finished">("active")
    const [eventos, setEventos] = useState<Evento[]>([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const cargarEventos = async () => {
            try {
                const data = await EventosService.obtenerEventos()
                setEventos(data)
            } catch (error) {
                console.error('Error al cargar eventos:', error)
            } finally {
                setIsLoading(false)
            }
        }

        cargarEventos()
    }, [])

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
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <TableRow key={`skeleton-${index}`}>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[150px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-8 w-[100px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[180px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[180px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[80px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[40px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-6 w-[80px] rounded-full" />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Skeleton className="h-8 w-8 rounded-md" />
                                            <Skeleton className="h-8 w-8 rounded-md" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            filteredEventos.map((evento) => (
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
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
