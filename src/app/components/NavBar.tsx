'use client'

import Link from 'next/link';
import { useState, useRef, useEffect, useContext } from 'react'
import FormModal from './FormModal';
import MobileNav from './MobileNav';
import Ctx from '../contexts/ctx';

export default function NavBar() {

    const navRef = useRef<HTMLAnchorElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const {handleCloseModal, handleOpenModal, isModalOpen, setModalOpen} = useContext(Ctx)

    useEffect(() => {
        const navHeight = navRef.current ? navRef.current.offsetHeight : 0
    }, [])

    return ( 
        <nav ref={navRef} className="h-40 z-10 justify-end flex w-full scroll:fixed">
            <ul className="flex h-full hidden lg:flex items-center justify-items-center justify-end ">
            <Link className='focus:text-orange-600 flex items-center h-full hover:text-teal-500' href="/"><li className="px-10">Home</li></Link>
            <Link className='focus:text-orange-600 flex items-center h-full hover:text-teal-500' href="/about"><li className="px-10">About</li></Link>
            <Link className='focus:text-orange-600 flex items-center h-full hover:text-teal-500' href="/work"><li className="px-10">Projects</li></Link>
            <Link className='focus:text-orange-600 flex items-center h-full hover:text-teal-500' href="#" onClick={(e)=> {
                e.preventDefault();
                handleOpenModal();
            }}><li className="px-10">Contact</li></Link>
            </ul>
            <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className=" h-full outline-none mobile-menu-button">
                            <svg className="w-40 h-20 text-orange-400 hover:text-teal-500"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
            <FormModal />
        </nav>
    )
}