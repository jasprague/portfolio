
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from './components/NavBar';
import FormModal from './components/FormModal';
import { CtxProvider } from './contexts/ctxProvider';


const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ubuntu'
})

export const metadata: Metadata = {
  title: 'Jason Sprague - Portfolio',
  description: 'Custom Next.js Portfolio App',
  openGraph:
    {
      images: [
        {
          url: '../public/image-of-me.webp'
        }
      ]
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans bg-gray-900 text-slate-300 text-2xl mx-auto`}>
      <CtxProvider>
        <NavBar />
        {children}
      </CtxProvider>
        </body>
    </html>
  )
}
