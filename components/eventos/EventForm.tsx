'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Evento } from '@/types/eventos'
import { EventosService } from '@/services/eventos.service'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent} from '@/components/ui/card'
import { CategoriasService } from '@/services/categorias.service'
import { EstadosService } from '@/services/estados.service'
import { getUsuario } from '@/context/auth'
import { useQuery } from '@tanstack/react-query'


const formSchema = z.object({
    nombreEvento: z.string().min(1, 'El nombre del evento es requerido'),
    categoriaID: z.string().min(1, 'La categoría del evento es requerida'),
    subCategoriaID: z.string().min(1, 'La subcategoría del evento es requerida'),
    lugarEvento: z.string().min(1, 'El lugar del evento es requerido'),
    maximoParticipantesEvento: z.string()
        .min(1, 'El máximo de participantes es requerido')
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, 'Debe ser un número positivo'),
    costoEvento: z.string()
        .min(1, 'El costo del evento es requerido')
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, 'El costo debe ser un número válido'),
    descripcionEvento: z.string()
        .min(10, 'La descripción debe tener al menos 10 caracteres')
        .max(500, 'La descripción no debe exceder los 500 caracteres'),
    cpEvento: z.string()
        .length(5, 'El código postal debe tener exactamente 5 dígitos')
        .regex(/^\d+$/, 'El código postal solo debe contener números'),
    municioEvento: z.string().min(1, 'El municipio es requerido'),
    estadoID: z.string().min(1, 'El estado es requerido'),
    direccionEvento: z.string().min(5, 'La dirección debe tener al menos 5 caracteres'),
    telefonoEvento: z.string()
        .length(10, 'El teléfono debe tener exactamente 10 dígitos')
        .regex(/^\d+$/, 'El teléfono solo debe contener números'),
    fechaEvento: z.string().min(1, 'La fecha es requerida'),
    horaEvento: z.string().min(1, 'La hora es requerida'),
    duracionEvento: z.string()
        .min(1, 'La duración es requerida')
        .regex(/^\d+$/, 'Solo se permiten números')
        .refine((val) => Number(val) > 0 && Number(val) <= 24, 'La duración debe estar entre 1 y 24 horas'),
    kitEvento: z.string().optional(),
    nuevaSubcategoria: z.string().optional()
})

type EventFormValues = z.infer<typeof formSchema>

interface EventFormProps {
    event?: Evento  
    onSubmitSuccess: () => void
}

export function EventForm({ event, onSubmitSuccess }: EventFormProps) {
    // const [estados, setEstados] = useState<Estado[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
    const [showOtherSubcategory, setShowOtherSubcategory] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const usuarioID = getUsuario().usuarioID
    const { toast } = useToast()

    const form = useForm<EventFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoriaID: event?.categoriaID.toString() || '',
            subCategoriaID: event?.subCategoriaID.toString() || '',
            nuevaSubcategoria: '',
            nombreEvento: event?.nombreEvento || '',
            lugarEvento: event?.lugarEvento || '',
            maximoParticipantesEvento: event?.maximoParticipantesEvento?.toString() || '',
            costoEvento: event?.costoEvento || '',
            descripcionEvento: event?.descripcionEvento || '',
            cpEvento: event?.cpEvento || '',
            municioEvento: event?.municioEvento || '',
            estadoID: event?.estadoID?.toString() || '',
            direccionEvento: event?.direccionEvento || '',
            telefonoEvento: event?.telefonoEvento || '',
            fechaEvento: event?.fechaEvento ? new Date(event.fechaEvento).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            horaEvento: event?.horaEvento || '',
            duracionEvento: event?.duracionEvento || '',
            kitEvento: event?.kitEvento || '',
        },
    })

    const onSubmit = async (values: EventFormValues) => {
        setIsSubmitting(true)
        try {
            if (event) {
                await EventosService.actualizarEvento(event.eventoID.toString(), {
                    ...values,
                    fechaEvento: new Date(values.fechaEvento).toISOString(),
                    estadoID: parseInt(values.estadoID),
                    maximoParticipantesEvento: values.maximoParticipantesEvento.toString(),
                    categoriaID: event.categoriaID,
                    subCategoriaID: event.subCategoriaID
                })
                toast({
                    title: "¡Éxito!",
                    description: "El evento se ha actualizado correctamente",
                    variant: "success"
                })
            } else {
                await EventosService.crearEvento(usuarioID, {
                    ...values,
                    fechaEvento: new Date(values.fechaEvento).toISOString(),
                    estadoID: parseInt(values.estadoID),
                    maximoParticipantesEvento: values.maximoParticipantesEvento.toString(),
                    categoriaID: parseInt(values.categoriaID),
                    subCategoriaID: parseInt(values.subCategoriaID),
                    kitEvento: values.kitEvento || '' 
                })
                toast({
                    title: "¡Éxito!",
                    description: "El evento se ha creado correctamente",
                    variant: "success"
                })
            }
            onSubmitSuccess()
            form.reset()
        } catch (error) {
            console.error('Error al enviar el evento:', error)
            toast({
                title: "Error",
                description: "Hubo un error al procesar el evento. Por favor, intenta de nuevo.",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    // useEffect(() => {
    //     // CategoriasService.obtenerCategoriasForm().then(setCategorias)
    //     EstadosService.obtenerEstados().then(setEstados)
    // }, [])

    // useEffect(() => {
    //     if (selectedCategoryId) {
    //         CategoriasService.obtenerSubCategorias(parseInt(selectedCategoryId)).then(setSubCategorias);
    //     }
    // }, [selectedCategoryId]);

    const { data: estados = [] } = useQuery({
        queryKey: ['estados'],
        queryFn: () => EstadosService.obtenerEstados(),
        staleTime: 30 * 60 * 1000, // 30 minutos
        gcTime: 10 * 60 * 1000, // 10 minutos
    });

    const { data: categorias = [] } = useQuery({
        queryKey: ['categorias'], 
        queryFn: () => CategoriasService.obtenerCategoriasForm(),
        staleTime: 30 * 60 * 1000, // 30 minutos
        gcTime: 10 * 60 * 1000, // 10 minutos
    });

    const { data: subCategorias = [] } = useQuery({
        queryKey: ['subcategorias', selectedCategoryId],
        queryFn: () => CategoriasService.obtenerSubCategorias(parseInt(selectedCategoryId)),
        enabled: !!selectedCategoryId,
        staleTime: 2 * 60 * 1000, // 2 minutos 
        gcTime: 10 * 60 * 1000, // 10 minutos
    });

    return (
        <Card className="max-w-screen-2xl mx-auto shadow-lg">
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="nombreEvento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre del Evento</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: Carrera 5K Mérida" {...field} className="focus-visible:ring-dorado" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="categoriaID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Categoría</FormLabel>
                                            <Select 
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                    setSelectedCategoryId(value);
                                                    form.setValue('subCategoriaID', '');
                                                    form.setValue('nuevaSubcategoria', '');
                                                    setShowOtherSubcategory(false);
                                                }} 
                                                defaultValue={field.value}
                                            >
                                            <FormControl>
                                                <SelectTrigger className="focus:ring-dorado">
                                                    <SelectValue placeholder="Selecciona una categoría" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categorias.map((categoria) => (
                                                    <SelectItem key={categoria.categoriaID} value={categoria.categoriaID.toString()}>{categoria.nombreCategoria}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subCategoriaID" 
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subcategoría</FormLabel>
                                        <Select 
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                setShowOtherSubcategory(value === "0");
                                            }}
                                            value={field.value}
                                            disabled={!selectedCategoryId}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="focus:ring-dorado">
                                                    <SelectValue placeholder={selectedCategoryId ? "Selecciona una subcategoría" : "Primero selecciona una categoría"} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {subCategorias.map((subCategoria) => (
                                                    <SelectItem 
                                                        key={subCategoria.subcategoriaID} 
                                                        value={subCategoria.subcategoriaID.toString()}
                                                    >
                                                        {subCategoria.nombreSubcategoria}
                                                    </SelectItem>
                                                ))}
                                                <SelectItem value="0">Otro (Agregar subcategoría)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {showOtherSubcategory && (
                                <FormField
                                    control={form.control}
                                    name="nuevaSubcategoria"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nueva Subcategoría</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Ingrese la nueva subcategoría" 
                                                    {...field} 
                                                    className="focus-visible:ring-dorado" 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            <FormField
                                control={form.control}
                                name="lugarEvento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lugar del Evento</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: Parque de las Américas" {...field} className="focus-visible:ring-dorado" />
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
                                            <Input 
                                                type="number" 
                                                min="1"
                                                placeholder="Ej: 100" 
                                                {...field} 
                                                className="focus-visible:ring-dorado"
                                            />
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
                                            <Input 
                                                type="number" 
                                                step="0.01" 
                                                min="0"
                                                placeholder="Ej: 250.00" 
                                                {...field} 
                                                className="focus-visible:ring-dorado"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="descripcionEvento"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descripción del Evento</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Describe los detalles importantes del evento..." 
                                            className="min-h-[100px] focus-visible:ring-dorado"
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Máximo 500 caracteres
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="cpEvento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Código Postal</FormLabel>
                                        <FormControl>
                                            <Input 
                                                maxLength={5}
                                                placeholder="Ej: 97000" 
                                                {...field}
                                                className="focus-visible:ring-dorado"
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '')
                                                    field.onChange(value)
                                                }}
                                            />
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
                                            <Input placeholder="Ej: Mérida" {...field} className="focus-visible:ring-dorado" />
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
                                                <SelectTrigger className="focus:ring-dorado">
                                                    <SelectValue placeholder="Selecciona un estado" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {estados.map((estado) => (
                                                    <SelectItem key={estado.estadoID} value={estado.estadoID.toString()}>{estado.nombreEstado}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="direccionEvento"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dirección</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Ej: Calle 20 x 25 y 27, Col. Centro" 
                                            {...field} 
                                            className="focus-visible:ring-dorado"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="telefonoEvento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Teléfono</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="tel"
                                                maxLength={10}
                                                placeholder="Ej: 9991234567" 
                                                {...field} 
                                                className="focus-visible:ring-dorado"
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '')
                                                    field.onChange(value)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fechaEvento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fecha del Evento</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="date"
                                                {...field}
                                                className="focus-visible:ring-dorado"
                                            />
                                        </FormControl>
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
                                            <Input 
                                                type="time" 
                                                {...field} 
                                                className="focus-visible:ring-dorado"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                            <FormField
                                control={form.control}
                                name="duracionEvento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Duración del Evento (horas)</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="number"
                                                min="1"
                                                max="24"
                                                placeholder="Ej: 2" 
                                                {...field}
                                                className="focus-visible:ring-dorado"
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '')
                                                    field.onChange(value)
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Ingresa la duración en horas (1-24)
                                        </FormDescription>
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
                                            <Input 
                                                placeholder="Ej: Playera, medalla, número" 
                                                {...field} 
                                                className="focus-visible:ring-dorado"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-1/2"
                            >
                                {isSubmitting ? 'Procesando...' : event ? 'Actualizar Evento' : 'Crear Evento'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
