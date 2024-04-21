
import type { Metadata } from 'next'
import { Great_Vibes, Playfair_Display } from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from './components/NavBar';
import FormModal from './components/FormModal';
import { CtxProvider } from './contexts/ctxProvider';


const cursive = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-greatvibes'
})

const normal = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: "Women's Return Conference",
  description: "Women's Christian Conference in Downeast Maine",
  metadataBase: new URL('https://www.womenreturn.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph:
    {
      images: [
        {
          url: '/return-logo.png'
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
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body className={`${normal.variable} font-sans text-zinc-600 text-2xl mx-auto`}>
      <CtxProvider>
        <NavBar />
        {children}
      </CtxProvider>
        </body>
    </html>
  )
}
