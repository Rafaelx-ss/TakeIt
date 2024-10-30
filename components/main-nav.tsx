'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { UserNav } from '@/components/user-nav';

export function MainNav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link href="/" className="font-bold text-xl">
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
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {session ? (
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