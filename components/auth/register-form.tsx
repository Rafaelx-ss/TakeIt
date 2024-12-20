'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { backend } from '@/lib/endpoints';
import axios from 'axios';

// Esquema de validación con confirmación de contraseña
const registerSchema = z
    .object({
        nombreUsuario: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
        usuario: z.string().min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
        email: z.string().email('Correo electrónico inválido'),
        password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
        confirmPassword: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
        telefonoUsuario: z.string().optional(),
        fechaNacimientoUsuario: z.string().optional(),
        generoUsuario: z.enum(['MASCULINO', 'FEMENINO', 'OTRO']).optional(),
        rolUsuario: z.enum(['participante', 'organizador']),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword'],
    });

type RegisterForm = z.infer<typeof registerSchema>;

export function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
        nombreUsuario: '',
        usuario: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefonoUsuario: '',
        fechaNacimientoUsuario: '',
        generoUsuario: undefined,
        rolUsuario: 'participante',
        },
    });

    async function onSubmit(data: RegisterForm) {
        setIsLoading(true);
        try {
            const response = await axios.post(`${backend}/api/auth/register`, {
                nombreUsuario: data.nombreUsuario,
                usuario: data.usuario,
                email: data.email,
                password: data.password,
                telefonoUsuario: data.telefonoUsuario,
                fechaNacimientoUsuario: data.fechaNacimientoUsuario,
                generoUsuario: data.generoUsuario,
                rolUsuario: data.rolUsuario
            });

            toast({
                title: 'Cuenta creada exitosamente',
                description: 'Ahora puedes iniciar sesión',
            });
            router.push('/login');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    variant: 'destructive',
                    title: 'Error al crear la cuenta',
                    description: error.response?.data?.message || 'Error al registrar'
                });
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error al crear la cuenta',
                    description: 'Ocurrió un error inesperado'
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex gap-4">
                <FormField
                    control={form.control}
                    name="nombreUsuario"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="usuario"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Nombre de Usuario</FormLabel>
                        <FormControl>
                        <Input 
                            placeholder="Usuario único" 
                            autoComplete='username' 
                            {...field} 
                            onChange={(e)=>{
                                const inputValue = e.target.value;
                                const filterValue = inputValue.replace(/[^a-zA-Z0-9_]/g, '');
                                field.onChange(filterValue);
                            }}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="correo@ejemplo.com" autoComplete='email' {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                
                <div className="flex gap-4">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                        <Input type="password" autoComplete='new-password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Repite la Contraseña</FormLabel>
                        <FormControl>
                        <Input type="password" autoComplete='new-password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                
                <div className="flex gap-4">
                <FormField
                    control={form.control}
                    name="telefonoUsuario"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                        <Input 
                            type="number"
                            placeholder="Número de teléfono" 
                            min="1000000000"
                            max="9999999999"
                            {...field} 
                            onChange={(e)=>{
                                const inputValue = e.target as HTMLInputElement;
                                const filterValue = inputValue.value.replace(/[^0-9]/g, '');
                                field.onChange(filterValue);
                            }}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fechaNacimientoUsuario"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Fecha de Nacimiento</FormLabel>
                        <FormControl>
                        <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <FormField
                control={form.control}
                name="generoUsuario"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Género</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu género" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="MASCULINO">Masculino</SelectItem>
                        <SelectItem value="FEMENINO">Femenino</SelectItem>
                        <SelectItem value="OTRO">Otro</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                
                <FormField
                control={form.control}
                name="rolUsuario"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tipo de Cuenta</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="participante">Participante</SelectItem>
                        <SelectItem value="organizador">Organizador</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                ¿Ya tienes una cuenta?{' '}
                <Link href="/login" className="text-primary hover:underline hover:text-dorado">
                    Inicia Sesión
                </Link>
                </p>
            </form>
        </Form>
    );
}
