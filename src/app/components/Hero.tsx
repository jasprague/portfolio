import Image from 'next/image';
import heroImage from '../../../public/stars-background.avif'
import Button from './Button'

export default function Hero() {
    return(
        <section className="flex" >
        <div className="w-full hero static h-screen flex justify-center items-center text-center">
            <div className=" flex-col justify-between mb-80 md:w-9/12 w-10/12">
                <h1 className="">Hi, I'm Jason.</h1>
                <h2 className="mb-10"> My passion is building performant custom web applications using the latest tech.</h2>
                <Button text='About Me' color="cta" path="/about"/>
            </div>
            <Image src={heroImage} className="bg-fixed" alt="picture of stargazer looking at a galaxy" width={1080} height={1920} sizes="100vw" fill quality={50} placeholder="blur" style={{
                objectFit: 'cover',
                zIndex: '-1',
                filter: 'brightness(45%)'
            }}/>
        </div>
    </section>
    )

}