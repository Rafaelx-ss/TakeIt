'use client';

import { useAuth } from '@/app/context/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { auth, isLoading } = useAuth(); // Añadimos isLoading
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !auth.token) {
            router.push('/login'); // Redirige al login si no hay token
        }
    }, [auth.token, isLoading, router]);

    // Mientras verifica, muestra un mensaje de "Cargando..."
    if (isLoading) {
        return <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">Cargando...</div>;
    }

    // Si no está cargando y está autenticado, renderiza los hijos
    return <>{children}</>;
};
