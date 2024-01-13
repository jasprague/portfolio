
import Link from 'next/link'

interface ButtonProps {
    text: string,
    color: string,
    path: string
}

export default function Button({text, color, path}: ButtonProps) {
    return (
        <Link href={path}><button className={`${color} p-5 bg-teal-600 transition ease-in-out hover:translate-y-0.5 hover:bg-teal-800                                                   00 w-full md:w-80 w-6/12 mx-10 mb-10 rounded-full ` }>{text}</button></Link>
    )
}