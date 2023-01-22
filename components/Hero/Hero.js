import React from 'react'

export const Hero = ({heading, message}) => {
    return (
        <div className='h-screen bg-no-repeat bg-cover bg-center hero-background bg-fixed mb-8'>
            {/* overlay */}
            <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black/70'>
                <div className=' text-white z-[2] m-8' >
                    <h2 className='text-5xl font-bold'> {heading} </h2>
                    <p className='text-xl py-5'> {message} </p>
                    <button className='py-2 px-8 border'> Book </button>
                </div>
            </div>
        </div>
    )
}
