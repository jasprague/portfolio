import Image from 'next/image';
import { Great_Vibes } from 'next/font/google'
import heroImage from '../../../public/return-hero.jpg'
import Button from './Button'

const cursive = Great_Vibes({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-greatvibes'
  })

export default function Hero() {
    return(
        <section className="flex h-screen text-slate-200" >
        <div className="w-full h-6/6 relative flex flex-col gap-48 justify-end md:gap-32 items-center text-center">
            <div className="sm:mb-0 flex-col justify-between 2xl:w-4/12 xl:w-6/12 lg:w-6/12 md:w-8/12 w-11/12 self-center">
                <h1 className="text-6xl md:text-8xl">Women's Return Conference 2024</h1>
            </div>
            <div className="sm:mb-0 flex-col justify-between md:w-10/12 w-full bg-gray-300/50 py-20 md:mb-20">
                <h2 className={`text-5xl sm:text-5xl px-2 md:text-6xl mb-10 font-sans ${cursive.variable}`}>Love In Deed Is Love Indeed</h2>
                <Button text='Info' color="cta" path="/about"/>
                <Button text="Sign Up" color="alt" path="/projects"/>
            </div>
            <Image src={heroImage} alt="picture of woman in prayer" fill quality={100} sizes="100vw" priority={true} placeholder="blur" style={{
                objectFit: 'cover',
                objectPosition: 'top',
                zIndex: '-1',
                filter: 'brightness(65%)'
            }}/>
        </div>
    </section>
    )

}