import React, { useState } from 'react'
import Justine from '../assets/justine.jpg'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Headers = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const toogleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className='w-[85%] mx-auto py-3 flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2.5'>
                <img src={Justine} alt="" className='object-cover object-center w-[40px] h-[40px] rounded-full border-[#1F2937] border-2'/>
                <h1 className='text-2xl'>Cipher</h1>
            </div>

            <div className='flex gap-3 items-center justify-center'>
                <nav className='hidden sm:flex sm:gap-5 '>
                    <a href=""><span>Home</span></a>
                    <a href=""><span>About</span></a>
                    <a href=""><span>Skills</span></a>
                    <a href=""><span>Projects</span></a>
                    <a href=""><span>Contact</span></a>
                </nav>

                 <div className="sm:hidden cursor-pointer" onClick={toogleMenu}>
                    {menuOpen ? <RiCloseLine size={25} /> : <RiMenu3Line size={25} />}
                </div>

                { 
                    menuOpen && (
                        <nav className='absolute top-14 right-5 bg-[#1a1a1a] p-5 rounded-lg shadow-lg flex flex-col gap-5 sm:hidden z-50' onClick={toogleMenu}>
                            <a href=""><span>Home</span></a>
                            <a href=""><span>About</span></a>
                            <a href=""><span>Skills</span></a>
                            <a href=""><span>Projects</span></a>
                            <a href=""><span>Contact</span></a>
                        </nav>
                    )
                }
            </div>
        </header>
    )
}

export default Headers