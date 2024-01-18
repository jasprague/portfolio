import Image from 'next/image';
import heroImage from '../../../public/hero-new.webp'
import Button from './Button'

export default function Hero() {
    return(
        <section className="flex h-screen" style={{zIndex: "-10", backgroundColor: "black", position: "relative"}} >
        <div className="w-full h-5/6 relative flex justify-center items-center text-center">
            <div className=" mb-10 sm:mb-0 flex-col justify-between md:w-9/12 w-10/12">
                <h1 className="text-8xl mb-10">Hi, I'm Jason.</h1>
                <h2 className="mb-10"> My passion is building performant custom web applications using the latest tech.</h2>
                <Button text='About Me' color="cta" path="/about"/>
            </div>
            <Image src={heroImage} alt="picture of stargazer looking at a galaxy" fill quality={75} sizes="100vw" priority={true} placeholder="blur" style={{
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: '-1',
                filter: 'brightness(45%)'
            }}/>
        </div>
    </section>
    )

}