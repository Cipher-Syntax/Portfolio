import React, { useState, useEffect } from 'react';
import api from '../api/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6); // show only 6 initially

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await api.get('api/projects/');
            setProjects(response.data);
        };
        fetchProjects();
    }, []);

    const handleViewMore = () => {
        setVisibleCount(prev => prev + 6); // show 6 more projects on each click
    };

    return (
        <section className='w-[85%] mx-auto mt-20'>
            <h1 className='text-3xl font-bold tracking-widest text-center mb-10'>Featured Projects</h1>

            {/* Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {projects.slice(0, visibleCount).map((project, index) => (
                    <div key={index} className='p-3 bg-[#f5f5f5] shadow-lg rounded-lg hover:scale-105 transition-transform duration-300'>
                        <img 
                            src={project.image ? project.image : ""} 
                            alt={project.title} 
                            className='h-[130px] w-full object-cover rounded-md mb-2' 
                        />
                        <h2 className='text-[#14B8A6] font-semibold text-center mb-2'>{project.title}</h2>
                        <p className='text-gray-500 text-[12px] leading-relaxed text-justify'>
                            {project.description.length > 150
                                ? project.description.slice(0, 150) + '...'
                                : project.description
                            }
                        </p>
                        <a 
                            href="https://github.com/Cipher-Syntax/Django-React-Projects" 
                            className='block text-center py-2 mt-3 bg-[#1a1a1a] text-[#14B8A6] rounded hover:bg-[#14B8A6] hover:text-white transition-colors duration-300'
                        >
                            View Code
                        </a>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            {visibleCount < projects.length && (
                <div className='flex justify-center mt-10'>
                    <button 
                        onClick={handleViewMore} 
                        className='px-6 py-2 bg-[#1a1a1a] text-[#14B8A6] rounded-lg font-semibold hover:bg-[#14B8A6] hover:text-white transition-colors duration-300'
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
