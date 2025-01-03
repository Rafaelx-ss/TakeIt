import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { MainNav } from '@/components/main-nav';
import Footer from '@/components/Footer';

const originalError = console.error;
console.error = (...args) => {
    if (
        args[0]?.includes('chrome-extension://pejdijmoenmkgeppbflobdenhhabjlaj') ||
        args[0]?.includes('net::ERR_FILE_NOT_FOUND')
    ) {
        return;
    }
    originalError(...args);
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Take It',
  description: 'Encuentra y participa en los mejores eventos deportivos',
};

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <MainNav />
            {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}