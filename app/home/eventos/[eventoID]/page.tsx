'use client'

import { useParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { EventForm } from '@/components/eventos/EventForm'
import { EventosService } from '@/services/eventos.service'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Evento } from "@/types/eventos"

export default function EventPage() {
    const params = useParams()
    const router = useRouter()
    const eventoID = params.eventoID as string

    const { data: event, isLoading, error } = useQuery({
        queryKey: ['event', eventoID],
        queryFn: () => EventosService.obtenerEvento(eventoID),
        enabled: eventoID !== 'new',
    })

    const handleSubmitSuccess = () => {
        router.push('/home/eventos')
    }

    if (eventoID !== 'new') {
        if (isLoading) return <div className="flex justify-center items-center h-screen">Cargando...</div>
        if (error) return <div className="text-red-500">Error al cargar el evento</div>
    }

    return (
        <div className="p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-foreground">
                    {eventoID === 'new' ? 'Crear Nuevo Evento' : 'Editar Evento'}
                </h1>
                <Button
                    onClick={() => router.back()}
                    size="lg"
                    variant="ghost" 
                >
                    <ArrowLeft className="h-4 w-4" /> Volver
                </Button>

                
            </div>
            <EventForm 
                event={eventoID === 'new' ? undefined : event as Evento} 
                onSubmitSuccess={handleSubmitSuccess} 
            />
        </div>  
    )
}
