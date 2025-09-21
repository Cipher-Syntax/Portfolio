import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-full bg-[#1a1a1a] text-white mt-20'>
            
            <div className='w-[85%] mx-auto py-12 flex flex-col md:flex-row justify-between gap-10'>
                
                {/* Contact Info */}
                <div className='flex flex-col gap-3'>
                    <h3 className='text-[#14B8A6] font-bold text-lg'>Contact</h3>
                    <p className='text-gray-400'>programmerjustine@gmail.com</p>
                    <p className='text-gray-400'>(+63) 994 162 7819</p>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col gap-3'>
                    <h3 className='text-[#14B8A6] font-bold text-lg'>Quick Links</h3>
                    <a href="#about" className='hover:text-[#14B8A6] transition-colors'>About Me</a>
                    <a href="#projects" className='hover:text-[#14B8A6] transition-colors'>Projects</a>
                    <a href="#contact" className='hover:text-[#14B8A6] transition-colors'>Contact</a>
                </div>

                {/* Social Links */}
                <div className='flex flex-col gap-3'>
                    <h3 className='text-[#14B8A6] font-bold text-lg'>Follow Me</h3>
                    <div className='flex gap-4'>
                        {[
                            { Icon: FaGithub, label: "GitHub", url: "https://github.com/Cipher-Syntax/Django-React-Projects" },
                            { Icon: FaLinkedinIn, label: "LinkedIn", url: "www.linkedin.com/in/justine-toong-347953363" },
                            { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com/programmerjustine" }
                        ].map((Icon, idx) => (
                        <a 
                            key={idx} 
                            href={url}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='p-3 bg-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:bg-[#14B8A6] hover:text-white transition-all duration-300 transform hover:scale-110'
                        >
                            <Icon size={18}/>
                        </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className='border-t border-gray-700 pt-6 text-center text-gray-500 text-sm'>
                &copy; 2025 | Justine. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
