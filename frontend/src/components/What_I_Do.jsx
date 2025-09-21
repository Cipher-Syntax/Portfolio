import React from 'react'

const What_I_Do = ({ icon, title, description }) => {
    return (
        <div className='w-[200px] sm:w-[260px] md:w-[280px] h-[280px] sm:h-[300px] mx-auto rounded-xl bg-white shadow-lg flex flex-col items-center justify-center p-5 transform transition-transform duration-300 hover:scale-105'>
            <div className='text-5xl text-[#14B8A6] mb-3 animate-fadeIn'>{icon}</div>
            <h3 className='text-lg font-semibold tracking-wide text-center mb-2 animate-slideUp'>{title}</h3>
            <p className='text-gray-500 text-[13px] sm:text-[14px] leading-relaxed tracking-wide text-justify'>{description}</p>
        </div>
    )
}

export default What_I_Do
