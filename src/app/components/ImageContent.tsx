import Image from "next/image"
import { Great_Vibes } from 'next/font/google'
import img from "../../../public/womens-return-3.jpeg"
import Button from './Button'



const cursive = Great_Vibes({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-greatvibes'
  })

export default function ImageContent() {
    return (
        <section className="w-10/12 mx-auto">
            <h2 className="text-center text-6xl mt-20 section-header">What Is The Return Conference?</h2>
            <div className="flex">
                <div className="float-left w-4/12 relative mr-24">
                    <Image src={img} alt="women sitting at conference"></Image>
                </div>
                <div className="w-8/12 text-3xl leading-normal flex flex-col gap-20 mt-10">
                    <p><span className={`font-sans ${cursive.variable} text-5xl`}>Let's face it.</span> Living in rural Maine, we may have a diverse group of women in our individual churches, but we still may have difficulty finding someone to really connect and grow with. It is our desire to see women connect around similar interests, missions, and seasons of life.
                    And guess what? The Return Conference will provide opportunity for that to happen!
                    </p>
                    <p>
                    We have women from various backgrounds presenting on how God is at work in their lives, encouraging you in your walk with the Lord as they share. You will also have opportunity to connect with women with similar interests as we break into small groups.
                    </p>
                    <div className="text-white">
                        <Button text="Learn More" color="cta" path="#" withinContent={true} />  
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}