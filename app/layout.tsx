import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "@radix-ui/themes/styles.css";
import { Theme  } from "@radix-ui/themes";

// import { Providers } from '@/components/providers';
// import { MainNav } from '@/components/main-nav';

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
            <Theme accentColor="amber" grayColor="slate" appearance="dark" radius="small" scaling="100%" panelBackground="translucent">
                {/* <MainNav /> */}
                {children}
                {/* </Providers> */}
            </Theme>
        </body>
    </html>
    );
}