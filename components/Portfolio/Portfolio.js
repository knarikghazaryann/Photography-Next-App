import Image from 'next/legacy/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'> Travel Photos </h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img' width='677' height='451'/>
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1452109777848-a4de775da10d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80' alt='img' width='215' height='217'/>
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1490187291333-b4ece7bec2e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img' width='215' height='217'/>
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img' width='215' height='217'/>
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80' alt='img' width='215' height='217' />
            </div>
        </div>
    </div>
  )
}

export default Portfolio