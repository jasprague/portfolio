import Image from 'next/image'
import imgOfMe from '../../../public/image-of.me.webp'
import TabbedContent from '../components/TabbedContent'
import ContentCard from '../components/ContentCard'

export default function About() {
    return (
        <>
        <section className="items-center justify-center flex flex:1 flex-col md:flex-row bg-gradient-to-r from-teal-600 -skew-y-3 h-96 my-32">
        <div className="md:w-6/12 flex justify-center skew-y-3">
            <div className="rounded-full w-80 h-80 overflow-hidden">
            <Image src={imgOfMe} alt="Image of Me" className="h-full w-full object-cover transform-none"/>
            </div>
        </div>
        </section>
        <section className="w-9/12 mx-auto text-center mb-40 leading-relaxed">
            <h1 className="mb-20">Jason Sprague</h1>
            <p className="leading-loose">I'm a passionate web developer based in Franklin, Maine, bringing over five years of experience in crafting functional and visually appealing websites. At 32 years old, I'm not just devoted to my career but also to my lovely family—my wife and our three wonderful children. Balancing family life with professional growth, I am currently exploring new opportunities. I am enthusiastic about contributing my skills to create impactful web solutions. My journey in web development is not just a profession; it's a lifelong passion for innovation and problem-solving.</p>
        </section>
            <TabbedContent />
        </>
    )
}