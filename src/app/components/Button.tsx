
import Link from 'next/link'

interface ButtonProps {
    text: string,
    color: string,
    path: string,
    withinContent?: boolean
}

export default function Button({text, color, path, withinContent=false}: ButtonProps) {
    return (
        <Link target={withinContent ? "_blank" : "_self"} href={path}><button className={`${color} p-5 bg-teal-700 transition ease-in-out hover:translate-y-0.5 hover:bg-teal-800 ${withinContent ? "m-auto md:mx-0 w-full my-5 md:w-6/12 lg:w-4/12 text-xl" : "w-8/12 md:w-4/12 mx-10"} mb-10 rounded-full text-center text-4xl` }>{text}</button></Link>
    )
}