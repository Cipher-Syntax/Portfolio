import React from 'react'
import Profile from '../assets/profile.jpg'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiDjango, SiReact, SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
    const socialIcons = [FaGithub, FaLinkedinIn, FaFacebookF];
    const skillIcons = [SiDjango, SiReact, SiTailwindcss];
    const icons = [...socialIcons, ...skillIcons];

    return (
        <section className='w-[85%] mx-auto mt-20 p-5 sm:p-10 flex flex-col md:flex-row items-center md:justify-between bg-[#F5F5F5] gap-10'>

            {/* Text Content */}
            <div className='flex-1 flex flex-col gap-5'>
                <h5 className='font-light tracking-wider text-center md:text-left'>WELCOME TO MY WORLD</h5>
                <h1 className='text-2xl sm:text-3xl md:text-3xl tracking-wide text-center md:text-left'>
                    Hello World, <span className='text-[#14B8A6] font-bold text-4xl tracking-widest'>Justine</span> Here <br />
                    a <span className='text-[#14B8A6] font-bold text-4xl tracking-wider'>
                        <ReactTyped strings={["Web Developer", "Programmer", "Student"]} typeSpeed={100} loop />
                    </span>
                </h1>

                <p className='mt-3 text-gray-500 w-full sm:w-[90%] text-center sm:text-justify font-light text-[14px] sm:text-[15px] leading-relaxed md:text-left tracking-wider'>
                    I don’t code for the sake of coding. I craft <span className='text-[#14B8A6] font-medium'>experiences that sell, impress, and perform</span>. 
                    If you want it <span className='text-[#14B8A6] font-medium'>done right, fast, and unforgettable</span>, I’m your person.
                </p>

                {/* Default icons layout for md+ devices */}
                <div className='hidden md:flex flex-wrap gap-5 mt-5 items-center justify-start'>
                    {/* Social */}
                    <div className='flex gap-3'>
                        {socialIcons.map((Icon, idx) => (
                            <a key={idx} href="#" className='p-3 bg-gray-100 rounded-lg shadow hover:bg-[#14B8A6] hover:text-white transition-colors duration-300'>
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                    {/* Skills */}
                    <div className='flex gap-3'>
                        {skillIcons.map((Icon, idx) => (
                            <div key={idx} className='p-3 bg-gray-100 rounded-lg shadow hover:scale-110 transition-transform duration-300'>
                                <Icon size={20} className="text-[#14B8A6]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className='relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] mx-auto'>

                {/* Center Image */}
                <img
                    src={Profile}
                    alt="Justine"
                    className='absolute inset-0 w-full h-full object-cover object-top rounded-full border-4 border-[#14B8A6] shadow-2xl'
                />

                {/* Rotating container only for small devices */}
                <div className="absolute inset-0 flex justify-center items-center orbit-spin md:hidden">
                    {icons.map((Icon, idx) => {
                        const angle = (360 / icons.length) * idx;
                        return (
                            <div
                                key={idx}
                                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                                style={{
                                    transform: `rotate(${angle}deg) translateX(160px) rotate(-${angle}deg)`
                                }}
                            >
                                <Icon size={35} className="text-[#14B8A6] bg-gray-100 p-2 rounded-full shadow" />
                            </div>
                        )
                    })}
                </div>

            </div>

        </section>
    )
}

export default HeroSection
