'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Evento } from '@/types/eventos'
import { EventosService } from '@/services/eventos.service'

const formSchema = z.object({
    nombreEvento: z.string().min(1, 'El nombre del evento es requerido'),
    lugarEvento: z.string().min(1, 'El lugar del evento es requerido'),
    maximoParticipantesEvento: z.string().min(1, 'El máximo de participantes es requerido'),
    costoEvento: z.string().min(1, 'El costo del evento es requerido'),
    descripcionEvento: z.string().min(1, 'La descripción del evento es requerida'),
    cpEvento: z.string().min(5, 'El código postal debe tener al menos 5 caracteres'),
    municioEvento: z.string().min(1, 'El municipio es requerido'),
    estadoID: z.string().min(1, 'El estado es requerido'),
    direccionEvento: z.string().min(1, 'La dirección es requerida'),
    telefonoEvento: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
    fechaEvento: z.date(),
    horaEvento: z.string(),
    duracionEvento: z.string(),
    kitEvento: z.string().optional(),
    activoEvento: z.boolean(),
    estadoEvento: z.boolean(),
})

type EventFormValues = z.infer<typeof formSchema>

interface EventFormProps {
    event?: Evento
    onSubmitSuccess: () => void
}

export function EventForm({ event, onSubmitSuccess }: EventFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<EventFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombreEvento: event?.nombreEvento || '',
            lugarEvento: event?.lugarEvento || '',
            maximoParticipantesEvento: event?.maximoParticipantesEvento?.toString() || '',
            costoEvento: event?.costoEvento || '',
            descripcionEvento: '',
            cpEvento: '',
            municioEvento: '',
            estadoID: '',
            direccionEvento: '',
            telefonoEvento: '',
            fechaEvento: new Date(),
            horaEvento: '',
            duracionEvento: '',
            kitEvento: '',
            activoEvento: true,
            estadoEvento: true,
        },
    })

    const onSubmit = async (values: EventFormValues) => {
        setIsSubmitting(false)
        try {
            if (event) {
                await EventosService.actualizarEvento(event.eventoID.toString(), {
                    ...values,
                    fechaEvento: values.fechaEvento.toISOString(),
                    estadoID: parseInt(values.estadoID),
                    maximoParticipantesEvento: values.maximoParticipantesEvento.toString(),
                    categoriaID: event.categoriaID,
                    subCategoriaID: event.subCategoriaID
                })
            } else {
                await EventosService.crearEvento({
                    ...values,
                    fechaEvento: values.fechaEvento.toISOString(),
                    estadoID: parseInt(values.estadoID),
                    maximoParticipantesEvento: values.maximoParticipantesEvento.toString(),
                    categoriaID: 1,
                    subCategoriaID: 1,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    kitEvento: values.kitEvento || '' 
                })
            }
            onSubmitSuccess()
        } catch (error) {
            console.error('Error al enviar el evento:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="nombreEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Nombre del Evento</FormLabel>
                    <FormControl>
                        <Input placeholder="Nombre del evento" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="lugarEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Lugar del Evento</FormLabel>
                    <FormControl>
                        <Input placeholder="Lugar del evento" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="maximoParticipantesEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Máximo de Participantes</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="Máximo de participantes" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="costoEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Costo del Evento</FormLabel>
                    <FormControl>
                        <Input type="number" step="0.01" placeholder="Costo del evento" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="descripcionEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Descripción del Evento</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Descripción del evento" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="cpEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Código Postal</FormLabel>
                    <FormControl>
                        <Input placeholder="Código postal" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="municioEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Municipio</FormLabel>
                    <FormControl>
                        <Input placeholder="Municipio" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="estadoID"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona un estado" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="31">Yucatán</SelectItem>
                        {/* Agrega más estados según sea necesario */}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="direccionEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                        <Input placeholder="Dirección del evento" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="telefonoEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                        <Input placeholder="Teléfono de contacto" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="fechaEvento"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Fecha del Evento</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span>Selecciona una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="horaEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Hora del Evento</FormLabel>
                    <FormControl>
                        <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="duracionEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Duración del Evento</FormLabel>
                    <FormControl>
                        <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="kitEvento"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Kit del Evento</FormLabel>
                    <FormControl>
                        <Input placeholder="Kit del evento" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="activoEvento"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <FormLabel className="text-base">Evento Activo</FormLabel>
                        <FormDescription>
                        Indica si el evento está actualmente activo
                        </FormDescription>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="estadoEvento"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <FormLabel className="text-base">Estado del Evento</FormLabel>
                        <FormDescription>
                        Indica el estado actual del evento
                        </FormDescription>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    </FormItem>
                )}
                />

                <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : event ? 'Actualizar Evento' : 'Crear Evento'}
                </Button>
            </form>
        </Form>
    )
}

