import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiDjango, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";

const skillsData = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "PHP", icon: <SiPhp className="text-purple-700" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-800" /> },
];

const Skills = () => {
    return (
        <section className='w-[85%] mx-auto mt-20'>
            <h1 className='text-3xl font-bold tracking-widest text-center mb-10'>My Skills</h1>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 items-center justify-center'>
                {skillsData.map((skill, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col items-center justify-center p-5 bg-[#f5f5f5] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'
                    >
                        <div className='text-5xl mb-3'>{skill.icon}</div>
                        <h3 className='text-lg font-semibold tracking-wider'>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
