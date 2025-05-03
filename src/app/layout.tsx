import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Changed to Geist Sans
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({ // Using Geist Sans
  variable: '--font-geist-sans',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'SynergyFlow Solutions', // Updated Title
  description: 'Automatize, Integre e Otimize seu Atendimento ao Cliente com SynergyFlow Solutions.', // Updated Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">{/* Changed language to Portuguese */}
      <body className={`${geistSans.variable} font-sans antialiased`}> {/* Using Geist Sans font */}
        {children}
        <Toaster /> {/* Added Toaster for potential future notifications */}
      </body>
    </html>
  );
}
