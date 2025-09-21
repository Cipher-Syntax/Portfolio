import React from 'react'
import Justine from '../assets/justine.jpg'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiDjango, SiReact, SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
    return (
        <section className='w-[85%] mx-auto mt-20 p-5 sm:p-10 flex flex-col md:flex-row items-center md:justify-between bg-[#F5F5F5] gap-10'>
            
            {/* Text Content */}
            <div className='flex-1 flex flex-col gap-5'>
                <h5 className='font-light tracking-wider text-center md:text-left'>WELCOME TO MY WORLD</h5>
                <h1 className='text-3xl sm:text-4xl md:text-4xl tracking-wide text-center md:text-left'>
                    Hello World, <span className='text-[#14B8A6] font-bold text-5xl'>Justine</span> Here <br />
                    a <span className='text-[#14B8A6] font-bold text-5xl'><ReactTyped strings={["Web Developer", "Programmer", "Master of Dark Arts"]} typeSpeed={40} loop /></span>
                </h1>

                <p className='text-gray-500 w-[90%] text-center sm:text-justify font-light text-[14px] tracking-wider sm:text-[15px] leading-relaxed  md:text-left'>
                    I don’t code for the sake of coding. I craft <span className='text-[#14B8A6] font-bold'>experiences that sell, impress, and perform</span>. 
                    If you want it <span className='text-[#14B8A6] font-bold'>done right, fast, and unforgettable</span>, I’m your person.
                </p>

                {/* Social & Skills */}
                <div className='flex flex-wrap gap-5 mt-5 items-center justify-center md:items-start md:justify-start'>
                        {/* Social */}
                        <div className='flex gap-3'>
                            {[
                                { Icon: FaGithub, label: "GitHub", url: "https://github.com/Cipher-Syntax/Django-React-Projects" },
                                { Icon: FaLinkedinIn, label: "LinkedIn", url: "www.linkedin.com/in/justine-toong-347953363" },
                                { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com/programmerjustine" }
                            ].map((Icon, url, idx) => (
                                <a key={idx} 
                                href={url}
                                target='_blank'
                                rel='noopener noreferrer'
                                 className='p-3 bg-gray-100 rounded-lg shadow hover:bg-[#14B8A6] hover:text-white transition-colors duration-300'>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className='flex gap-3'>
                            {[SiDjango, SiReact, SiTailwindcss].map((Icon, idx) => (
                                <div key={idx} className='p-3 bg-gray-100 rounded-lg shadow hover:scale-110 transition-transform duration-300'>
                                    <Icon size={20} className="text-[#14B8A6]" />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>

            {/* Image */}
            <div className='relative w-[280px] h-[300px] sm:w-[300px] sm:h-[320px] md:w-[350px] md:h-[380px] rounded-full overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105 border-[#14B8A6] border-4'>
                <img src={Justine} alt="Justine" className='h-full w-full object-cover' />
            </div>

        </section>
    )
}

export default HeroSection
