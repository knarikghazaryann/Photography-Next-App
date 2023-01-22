import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [colour, setColour] = useState('transparent');
    const [textColour, setTextColour] = useState('white');

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColour('white');
                setTextColour('black');
            } else {
                setColour('transparent');
                setTextColour('white');
            }
        }
        window.addEventListener('scroll', changeColor);
    }, []);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav style={{backgroundColor: `${colour}`}} className='fixed left-0 top-0 w-full ease-in duration-300 z-10'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color: `${textColour}`}} className='font-bold text-4xl'> Captur </h1>
                </Link>
                <ul style={{color: `${textColour}`}} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'> Home </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#gallery'> Gallery </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/portfolio'> Portfolio </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'> Contact </Link>
                    </li>
                </ul>

                {/* Mobile button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColour}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColour}`}} /> }
                </div>

                {/* Mobile menu */}
                <div className={nav ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 right-0 bottom-0 -left-full flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'> Home </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#gallery'> Gallery </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/portfolio'> Portfolio </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/contact'> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar