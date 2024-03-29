import { useContext } from 'react'
import Link from 'next/link'
import FormModal from './FormModal';
import Ctx from '../contexts/ctx';

interface MobileNavProps {
    isNavOpen: boolean
    setIsNavOpen: (isNavOpen:boolean) => void
}

export default function MobileNav({isNavOpen , setIsNavOpen}:MobileNavProps) {
    const {handleCloseModal, handleOpenModal, isModalOpen, setModalOpen} = useContext(Ctx)

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <nav className={`z-10 bg-gray-900 h-screen ${isNavOpen ? "flex flex-col" : "hidden"} w-full fixed justify-center gap-10 md:gap-20 text-4xl`}>
            <ul className="flex flex-col lg:flex items-center h-3/6 justify-items-center">
            <Link onClick={() => handleNavToggle()} className='focus:text-orange-600 flex items-center h-full bg-gray-800 hover:text-teal-500 w-full justify-center' href="/"><li className="px-10">Home</li></Link>
            <Link onClick={() => handleNavToggle()}className='focus:text-orange-600 flex items-center h-full bg-gray-800 w-full justify-center hover:text-teal-500' href="/about"><li className="px-10">About</li></Link>
            <Link onClick={() => handleNavToggle()}className='focus:text-orange-600 flex items-center h-full bg-gray-800 w-full justify-center hover:text-teal-500' href="/projects"><li className="px-10">Projects</li></Link>
            <Link className='focus:text-orange-600 flex items-center h-full hover:text-teal-500 bg-gray-800 w-full justify-center' href="#" onClick={(e)=> {
                e.preventDefault();
                handleNavToggle();
                handleOpenModal();
            }}><li className="px-10">Contact</li></Link>
            </ul>
            <button className=" w-full w-full justify-center" onClick={() => handleNavToggle()}>Close</button>
            </nav>
    )
}

