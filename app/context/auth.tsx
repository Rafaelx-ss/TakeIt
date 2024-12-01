'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type AuthContextType = {
  auth: { token: string | null };
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<{ token: string | null }>({
        token: null,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('authToken');

        if (token) {
            setAuth({ token });
        }
        setIsLoading(false); // Finaliza la carga
    }, []);

    const login = (token: string) => {
        Cookies.set('authToken', token, { expires: 1, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
        setAuth({ token });
    };

    const logout = () => {
        Cookies.remove('authToken');
        setAuth({ token: null });
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
