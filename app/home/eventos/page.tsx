"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
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
import { Skeleton } from "@/components/ui/skeleton"
import { Pagination } from "@/components/ui/pagination"
import { Evento } from "@/types/eventos"
import { EventosService } from "@/services/eventos.service"
import { useModal } from '@/context/ModalContext';

export default function EventosPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "finished">("all")
    const [eventos, setEventos] = useState<Evento[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [sortColumn, setSortColumn] = useState<keyof Evento | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [totalItems, setTotalItems] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const { showModal } = useModal();

    useEffect(() => {
        const cargarEventos = async () => {
            setIsLoading(true)
            try {
                const data = await EventosService.obtenerEventos({
                    usuarioID: 1,
                    page: currentPage,
                    itemsPerPage, 
                    sortColumn,
                    sortDirection
                })
                setEventos(data.eventos)
                setTotalItems(data.totalItems)
            } catch (error) {
                console.error('Error al cargar eventos:', error)
                setError('Hubo un problema al cargar los eventos. Por favor, intente de nuevo más tarde.')
            } finally {
                setIsLoading(false)
            }
        }

        cargarEventos()
    }, [currentPage, itemsPerPage, sortColumn, sortDirection]) 

    const filteredEventos = useMemo(() => {
        return eventos.filter(evento =>
            evento.nombreEvento.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (filterStatus === "all" || 
                (filterStatus === "active" && evento.activoEvento) ||
                (filterStatus === "finished" && !evento.activoEvento))
        )
    }, [eventos, searchQuery, filterStatus])

    const paginatedEventos = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        return filteredEventos.slice(startIndex, startIndex + itemsPerPage)
    }, [filteredEventos, currentPage, itemsPerPage])


    const handleDelete = (eventoID: number) => {

        // if (window.confirm('¿Estás seguro de que quieres eliminar este evento?')) {
        //     try {
        //         // await EventosService.eliminarEvento(eventoID.toString())
        //         setEventos(eventos.filter(evento => evento.eventoID !== eventoID))
        //     } catch (error) {
        //         console.error('Error al eliminar el evento:', error)
        //         setError('Hubo un problema al eliminar el evento. Por favor, intente de nuevo.')
        //     }
        // }
    };


    const handleSort = (column: keyof Evento) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortColumn(column)
            setSortDirection('asc')
        }
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, filterStatus])
    return (
        <div className="p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-foreground">Eventos actuales</h1>
                <Link href="/home/eventos/new">
                    <Button size="lg" variant="outline">
                        <Plus className="h-4 w-4" />
                        Crear evento
                    </Button>
                </Link>
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

            {error && (
                <div className="bg-red-100 border border-error text-error px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]" onClick={() => handleSort('nombreEvento')}>
                                Nombre {sortColumn === 'nombreEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead onClick={() => handleSort('fechaEvento')}>
                                Fecha y Hora {sortColumn === 'fechaEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead onClick={() => handleSort('lugarEvento')}>
                                Lugar {sortColumn === 'lugarEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead onClick={() => handleSort('direccionEvento')}>
                                Dirección {sortColumn === 'direccionEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead onClick={() => handleSort('costoEvento')}>
                                Costo {sortColumn === 'costoEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead onClick={() => handleSort('maximoParticipantesEvento')}>
                                Participantes {sortColumn === 'maximoParticipantesEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead onClick={() => handleSort('activoEvento')}>
                                Estado {sortColumn === 'activoEvento' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            Array.from({ length: itemsPerPage }).map((_, index) => (
                                <TableRow key={`skeleton-${index}`}>
                                    <TableCell>
                                        <Skeleton className="h-6 w-[150px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-10 w-[100px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[230px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[180px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[50px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[30px]" />
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
                            paginatedEventos.map((evento) => (
                                <TableRow key={evento.eventoID}>
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
                                    <TableCell>${Number(evento.costoEvento).toFixed(2)}</TableCell>
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
                                                    <Link href={`/home/eventos/${evento.eventoID}`}>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 p-0 text-dorado hover:text-black hover:bg-dorado"
                                                        >
                                                            <Pencil className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
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
                                                        onClick={() => handleDelete(evento.eventoID)}
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
            <Pagination
                currentPage={currentPage}
                totalItems={filteredEventos.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

