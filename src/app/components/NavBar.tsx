'use client'

import Link from 'next/link';
import { useState, useRef, useEffect, useContext } from 'react'
import { Great_Vibes, Playfair_Display } from 'next/font/google'
import Image from 'next/image';
import returnLogo from '../../../public/return-logo.png'
import FormModal from './FormModal';
import MobileNav from './MobileNav';
import Ctx from '../contexts/ctx';

const cursive = Great_Vibes({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-greatvibes'
  })

export default function NavBar() {

    const navRef = useRef<HTMLAnchorElement>(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [navBg, setNavBg] = useState(false)

    const {handleCloseModal, handleOpenModal, isModalOpen, setModalOpen} = useContext(Ctx)

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 70) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navStyle = navBg ? { backgroundColor: "rgb(226 232 240)"} : {}
    return ( 
        <nav ref={navRef} style={navStyle} className={`h-40 z-10 justify-between flex w-full transition fixed top-0 text-3xl bg-slate-200/75`}>
            <div className="flex relative items-center gap-10 ml-10 h-full w-60">
                <Link href="/"><Image width={150} src={returnLogo} alt="Women's Return Logo"/></Link>
            </div>
            <ul className={`flex h-full w-2/5 hidden lg:flex items-center justify-items-center justify-around text-gray-700 font-sans ${cursive.variable}`}>
            <li className="px-10 flex items-center h-full hover:text-alt"><Link className='flex focus:text-cta items-center' href="/">Events</Link></li>
            <li className="px-10 flex items-center h-full hover:text-alt"><Link className='h-full flex items-center focus:text-cta' href="/">Info</Link></li>
            <li className='focus:text-orange-600 flex items-center h-full hover:text-alt focus:text-cta'><Link  href="#" onClick={(e)=> {
                e.preventDefault();
                handleOpenModal();
            }} className="px-10 flex items-center hover:text-alt">Contact</Link></li>
            </ul>
            <div className={`lg:hidden flex ${isMobileNavOpen ? "hidden" : ""} items-center`}>
                        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className=" h-full outline-none mobile-menu-button" title="Main Menu">
                            <svg className="w-40 h-12 hover:text-teal-500"
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
            <MobileNav isNavOpen={isMobileNavOpen} setIsNavOpen={setIsMobileNavOpen} />
        </nav>
    )
}