'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type AuthContextType = {
    auth: { token: string | null; user: any | null }; 
    isLoading: boolean;
    login: (token: string, user: any) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<{ token: string | null; user: any | null }>({
        token: null,
        user: null,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('authToken');
        const user = Cookies.get('authUser'); // <--Obtener datos del usuario logueado

        if (token && user) {
            setAuth({ token, user: JSON.parse(user) });
        }
        setIsLoading(false); // Finaliza la carga
    }, []);

    const login = (token: string, user: any) => {
        Cookies.set('authToken', token, { expires: 1, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
        Cookies.set('authUser', JSON.stringify(user), { expires: 1, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' }); // Guarda los datos del usuario
        // console.log("USUARIO::::", user);
        setAuth({ token, user });
    };

    const logout = () => {
        Cookies.remove('authToken');
        setAuth({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ auth, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};

export const getUsuario = () => {
    const { auth } = useAuth();
    return auth.user;
};
