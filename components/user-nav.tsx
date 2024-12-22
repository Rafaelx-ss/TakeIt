'use client';

import { LogOut, User, Calendar } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { useAuth } from '@/context/auth';

export function UserNav() {
  const { auth, logout } = useAuth();
  const usuario = auth.user;

  // console.log('Hola pepe', auth.user.usuarioID);

  // console.log("AUT::::", auth);
  // console.log("TOKEN:::::", auth.token);
  // console.log("USUARIO:::::", usuario);
  // console.log("Nombre:::::", usuario?.nombreUsuario);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarFallback>
            {usuario.nombreUsuario ? usuario.nombreUsuario.charAt(0).toUpperCase() : 'U'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/home/profile" className="cursor-pointer flex gap-2">
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/my-events" className="cursor-pointer flex gap-2">
            <Calendar className="h-4 w-4" />
            <span>Mis Eventos</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => logout()}
        >
          <LogOut className="h-4 w-4" />
          <span>Cerrar Sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}