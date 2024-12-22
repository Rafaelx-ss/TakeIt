'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UserNav } from '@/components/user-nav';
import { useAuth } from '@/context/auth';

export function MainNav() {
  const { auth, isLoading  } = useAuth();
  const pathname = usePathname();

  // console.log(auth); 

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link href="/" className="font-bold text-xl text-dorado">
            Take It
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/events"
              className={`text-sm transition-colors hover:text-primary ${
                pathname === '/events' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Eventos
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors hover:text-primary ${
                pathname === '/about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Nosotros
            </Link>
            {auth.token && (
              <Link
                href='/home/dashboard'
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="h-8 w-8 bg-muted animate-pulse rounded-full"></div>
          ) : auth.token ? (
            <UserNav />
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Iniciar Sesión</Button>
              </Link>
              <Link href="/register">
                <Button>Crear Cuenta</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}