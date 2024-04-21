
import Link from 'next/link'

interface ButtonProps {
    text: string,
    color: "cta" | "alt",
    path: string,
    withinContent?: boolean
}

export default function Button({text, color, path, withinContent=false}: ButtonProps) {
    const bgColor = color === "cta" ? "bg-cta" : "bg-alt"
    return (
        <Link target={withinContent ? "_blank" : "_self"} href={path}><button className={`${bgColor} p-5 transition ease-in-out hover:translate-y-0.5 hover:bg-teal-800 ${withinContent ? "m-auto md:mx-0 w-full my-5 md:w-6/12 lg:w-4/12 text-xl" : "w-6/12 md:w-3/12 mx-10"} mb-10 rounded-md text-center text-4xl` }>{text}</button></Link>
    )
}