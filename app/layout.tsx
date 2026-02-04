import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Comfort Living - Premium Furniture Store',
  description: 'Discover premium quality furniture for your home. Sofas, beds, dining sets, office furniture, wardrobes, and TV units at the best prices in India.',
  keywords: 'furniture, sofa, bed, dining set, office furniture, wardrobe, TV unit, home furniture',
  openGraph: {
    title: 'Comfort Living - Premium Furniture Store',
    description: 'Discover premium quality furniture for your home',
    images: [
      {
        url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
