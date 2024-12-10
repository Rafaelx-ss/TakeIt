'use client';

import { useEffect, useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useAuth } from '@/app/context/auth';
import { backend } from '@/lib/endpoints';

const loginSchema = z.object({
  email: z.string().email('Correo electrónico inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});


type LoginForm = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { auth, login } = useAuth();

  // Manejar redirección si el usuario ya está logueado
  useEffect(() => {
    if (auth.token) {
      toast({
        variant: 'alert',
        title: 'Hola',
        description: 'Ya has iniciado sesión',
      });
      router.push('/'); // Redirige al usuario
    }
  }, [auth.token, router, toast]); // Se ejecuta solo si auth.token cambia


  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginForm) {
    setIsLoading(true);
    try {
      const response = await fetch(`${backend}/api/auth/login`, { 
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Error al iniciar sesión');
        }

        const responseData = await response.json(); //  <-- Respuesta del servidor

        Cookies.set('authToken', responseData.data.token, { expires: 1, sameSite: 'strict'});  // <-- Guardar token en cookie

        console.log("datos del usuario::::", responseData.data.user);

        login(responseData.data.token, responseData.data.user);


        toast({
          variant: 'success',
          title: 'Bienvenido',
          description: 'Iniciaste sesión correctamente',
        });
        
        router.push('/');
        router.refresh();
    
      } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Error al iniciar sesión',
            description: error instanceof Error ? error.message : 'Ocurrió un error',
        });
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="correo@ejemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} autoComplete="current-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          ¿No tienes una cuenta?{' '}
          <Link href="/register" className="text-primary hover:underline hover:text-dorado">
            Regístrate
          </Link>
        </p>
      </form>
    </Form>
  );
}