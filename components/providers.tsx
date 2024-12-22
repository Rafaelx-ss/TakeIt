'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/auth';
import { ModalProvider } from '@/context/ModalContext';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ModalProvider >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
              {children}
              <Toaster />
            </ThemeProvider>
        </QueryClientProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

