import Image from 'next/image';
import heroImage from '../../../public/hero-new.webp'
import Button from './Button'

export default function Hero() {
    return(
        <section className="flex h-screen" >
        <div className="w-full h-6/6 relative flex justify-center items-center text-center">
            <div className=" mb-10 sm:mb-0 flex-col justify-between md:w-9/12 w-10/12">
                <h1 className="text-8xl mb-10">Hi, I'm Jason.</h1>
                <h2 className="mb-10"> My passion is building performant custom web applications with a great user experience.</h2>
                <Button text='About Me' color="cta" path="/about"/>
                <Button text="Projects" color="cta" path="/projects"/>
            </div>
            <Image src={heroImage} alt="picture of stargazer looking at a galaxy" fill quality={100} sizes="100vw" priority={true} placeholder="blur" style={{
                objectFit: 'cover',
                objectPosition: '35% center',
                zIndex: '-1',
                filter: 'brightness(45%)'
            }}/>
        </div>
    </section>
    )

}