import './globals.css';
import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blueprint Exteriors LLC | Roofing, Siding, Windows & Decks in North NJ',
  description: 'Blueprint Exteriors LLC provides roofing, siding, windows, doors, gutters, chimneys, decks, masonry, and exterior carpentry across Somerset County and North Jersey.',
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>
}
