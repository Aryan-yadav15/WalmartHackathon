import Image from 'next/image'
import React from 'react'

const Herosection = () => {
    return (
        <div className=''>
            <section className='flex flex-col'>
                <h1 className='font-bold text-[11rem] leading-none'>EXTEND YOUR </h1>
                <div className="w-full flex justify-between items-center bg-[#aaff00]">
                    <p className="text-8xl leading-none tracking-[-0.10em] font-thin py-5   ">
                        PRODUCTIVITY
                    </p>
                    <div className="flex flex-row gap-2 items-center pr-5">
                        <div className="flex flex-col text-2xl text-right leading-none">
                            <p className='flex flex-col font-bold '>Get </p>
                            <p className='flex flex-col font-bold '>Started</p>
                        </div>
                        <div className=''>
                            <div className="w-12 rounded-full h-12 bg-black flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between py-10 bg-gradient-to-r from-slate-200 to-gray-100 mt-5 px-10 rounded-2xl shadow-xl">
                    <div className="flex-1">
                        <Image
                            src='https://images.unsplash.com/photo-1693621947585-7b7d94149af4?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            width={700}
                            height={700}
                            objectFit='cover'
                            alt='heroImage'
                            className='rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-6 justify-end items-end text-gray-800">
                        <h1 className='font-bold text-xl uppercase tracking-wider bg-[#aaff00] px-4 py-2 rounded-md'>People Love it</h1>
                        <h1 className='text-6xl font-extrabold text-gray-600 leading-tight text-end'>Samsung Headphones</h1>
                        <h1 className='text-4xl font-semibold text-[#85b625]'>4.7/5.0</h1>
                        <p className='text-xl w-[35rem] text-end leading-relaxed bg-gray-50 p-4 rounded-md shadow-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Herosection