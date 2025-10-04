import React from 'react'

const What_I_Do = ({ icon, title, description }) => {
    return (
        <div className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] min-h-[240px] mx-auto rounded-xl bg-white shadow-lg flex flex-col items-center justify-center p-5 transform transition-transform duration-300 hover:scale-105'>
            <div className='text-4xl sm:text-5xl text-[#14B8A6] mb-3 animate-fadeIn'>
                {icon}
            </div>
            <h3 className='text-base sm:text-lg md:text-xl font-semibold tracking-wide text-center mb-2 animate-slideUp'>
                {title}
            </h3>
            <p className='text-gray-500 text-sm sm:text-[15px] leading-relaxed tracking-wide text-center sm:text-justify'>
                {description}
            </p>
        </div>
    )
}

export default What_I_Do
