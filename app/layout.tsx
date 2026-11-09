import type { Metadata } from 'next';
import './globals.css';
import './hero.css';
export const metadata: Metadata = {title:'Rodrigo Mora — Portafolio',description:'Conoce a Rodrigo Mora y conecta para conversar sobre nuevas oportunidades profesionales.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="es"><body>{children}</body></html>}
