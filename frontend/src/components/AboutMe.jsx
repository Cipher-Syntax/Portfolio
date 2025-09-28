import React from 'react'
import What_I_Do from './What_I_Do'
import { FiGlobe, FiDatabase, FiLayers, FiMonitor, FiTool, FiZap } from 'react-icons/fi';

const AboutMe = ({ id }) => {
    return (
        <section className='w-[85%] mx-auto mt-20' id={id}>
            
            <h1 className='leading-relaxed tracking-widest font-bold text-3xl'>About Me</h1>
            <div>
                <p className='text-gray-500 text-[13px] text-center sm:text-justify leading-relaxed font-light tracking-wider'>
                    Hi! I’m <span className='text-[#14B8A6] font-medium'>Justine</span>, an aspiring software engineer and web developer. 
                    I don’t just build websites—I create <span className='text-[#14B8A6] font-medium'>solutions that work, impress, and inspire</span>. 
                    I work with <span className='text-[#14B8A6] font-medium'>Python, Django, React, and PHP</span> to turn ideas into <span className='text-[#14B8A6] font-medium'>dynamic, user-friendly experiences</span>. 
                    Always <span className='text-[#14B8A6] font-medium'>learning, experimenting, and improving</span>, my goal is to craft digital experiences that <span className='text-[#14B8A6] font-medium'>leave a mark and get results</span>.
                </p>
            </div>

            <div className='mt-15'>
                <h1 className='tracking-wider text-3xl leading-relaxed'>What I Do</h1>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center'>
                    <What_I_Do 
                        icon={<FiGlobe/>} 
                        title="Web Development" 
                        description="Build responsive and interactive websites using React, Django, and PHP." 
                    />
                    <What_I_Do 
                        icon={<FiDatabase/>}
                        title="Backend Development" 
                        description="Design robust APIs, databases, and server-side logic." 
                    />
                    <What_I_Do 
                        icon={<FiLayers/>}
                        title="Full-Stack Projects" 
                        description="Combine front-end and back-end skills to deliver complete applications." 
                    />
                    <What_I_Do 
                        icon={<FiMonitor/>}
                        title="UI/UX Focused Design" 
                        description="Create user-friendly interfaces that look good and perform well." 
                    />
                    <What_I_Do 
                        icon={<FiTool/>}
                        title="Problem-Solving & Optimization" 
                        description="Debug, optimize, and improve existing code for better performance." 
                    />
                    <What_I_Do 
                        icon={<FiZap/>}
                        title="Learning & Innovation" 
                        description="Always experimenting with new tools, frameworks, and modern tech trends." 
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutMe