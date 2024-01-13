import Image from 'next/image'
import Hero from './components/Hero'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <main className="">
      <Hero />
      <SpeedInsights />
    </main>
  )
}
