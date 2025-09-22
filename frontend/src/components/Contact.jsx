import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Location from '../assets/location.png'
import api from '../api/api';

const Contact = ({ id }) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [feedback, setFeedback] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // submit logic
            if(!firstname.trim() || !lastname.trim() || !email.trim() || !message.trim()) return;
            const response = await api.post('api/feedbacks/', { firstname, lastname, email, message });
            console.log(response.data)

            setFeedback('Successfully sent the message');
            setFirstname('')
            setLastname('')
            setEmail('')
            setMessage('')

            setTimeout(() => {
                setFeedback('')
            }, 2000)
            
            
        } catch (error) {
            console.log('Failed to submit: ', error)
            setFeedback('Failed to send the message');
        }
    }

    return (
        <section className='w-[85%] mx-auto mt-20' id={id}>
            <h1 className='text-3xl font-bold tracking-widest mb-12 text-center'>Get In Touch</h1>

            <div className='flex flex-col md:flex-row md:justify-between gap-10'>
                
                {/* Contact Info Card */}
                <div className='md:w-1/3 bg-white shadow-xl rounded-lg p-6 flex flex-col gap-6'>
                    <div className='flex items-center gap-4'>
                        <MdEmail size={28} className='text-[#14B8A6]' />
                        <p className='text-gray-600 text-[15px]'>programmerjustine@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaPhoneAlt size={28} className='text-[#14B8A6]' />
                        <p className='text-gray-600 text-[15px]'>(+63) 994 162 7819</p>
                    </div>
                    <div className='mt-4 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm'>
                        <img src={Location} alt="location" />
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className='flex-1 bg-white shadow-xl rounded-lg p-8 flex flex-col gap-5'>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <input
                        type="text"
                        value={firstname}
                        placeholder='Firstname'
                        onChange={(e) => setFirstname(e.target.value)}
                        className='flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition'
                        />
                        <input
                        type="text"
                        value={lastname}
                        placeholder='Lastname'
                        onChange={(e) => setLastname(e.target.value)}
                        className='flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition'
                        />
                    </div>

                    <input
                        type="email"
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition'
                    />

                    <textarea
                        value={message}
                        placeholder='Message...'
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition h-36 resize-none'
                    />

                    <button
                        type='submit'
                        className='bg-[#14B8A6] text-white py-3 rounded-lg font-semibold hover:bg-[#0f918a] transition-colors duration-300'
                    >
                        Submit
                    </button>

                    {
                        feedback && (
                            <p className={`${feedback.includes('Successfully') ? "text-green-500 text-center" : "text-red-500 text-center"}`}>{feedback}</p>
                        )
                    }


                </form>
            </div>
            </section>

    )
}

export default Contact
