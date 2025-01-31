// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background-dark text-gray-100`}>
        <Navbar />
        <main className="md:pl-64 min-h-screen pb-20 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}