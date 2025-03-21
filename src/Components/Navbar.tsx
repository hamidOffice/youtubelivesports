import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed py-4 top-0 w-full flex flex-row justify-between items-center pt-4 bg-gray-900 text-white gap-3 px-4 md:py-0md:px-0 md:justify-center md:flex-col">
            <h1 className="text-3xl font-bold">Youtube Live Sports</h1>

            <div className="absolute right-4 text-white  md:hidden">
                <GiHamburgerMenu size={30} onClick={() => setIsOpen(true)} />
            </div>

            <div className="hidden items-center justify-evenly gap-3 border-t-2 border-y-white w-full py-4 md:flex">
                <div className="transition-all ease-linear -mb-2 flex justify-center items-center gap-2   hover:bg-white hover:text-black py-2 px-12 rounded-md">
                    <Link to={'/'} className='text-base'>Home</Link>
                </div>
                <div className="transition-all ease-linear -mb-2 flex justify-center items-center gap-2   hover:bg-white hover:text-black py-2 px-12 rounded-md">
                    <Link to={'/'} className='text-base'>News</Link>
                </div>
                <div className="transition-all ease-linear -mb-2 flex justify-center items-center gap-2   hover:bg-white hover:text-black py-2 px-12 rounded-md">
                    <Link to={'/'} className='text-base'>Players</Link>
                </div>
                <div className="transition-all ease-linear -mb-2 flex justify-center items-center gap-2   hover:bg-white hover:text-black py-2 px-12 rounded-md">
                    <Link to={'/'} className='text-base'>Ladder</Link>
                </div>
                <div className="transition-all ease-linear -mb-2 flex justify-center items-center gap-2   hover:bg-white hover:text-black py-2 px-12 rounded-md">
                    <Link to={'/'} className='text-base'>Draw</Link>
                </div>
            </div>

            {/* mobile menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex justify-between p-4 border-b border-gray-700">
                    <span className="text-xl font-bold">Youtube Live <br />Sports</span>
                    <button onClick={() => setIsOpen(false)}>
                        <FaXmark />
                    </button>
                </div>
                <div className="flex flex-col gap-3 mt-16">
                    <Link to={'/newS'} onClick={() => setIsOpen(false)} >
                        <button className='text-base text-left px-2 py-2  hover:bg-white hover:text-black focus-within:bg-white w-full cursor-pointer focus-within:text-black'>
                            Home
                        </button>
                    </Link>
                    <Link to={'/dra'} onClick={() => setIsOpen(false)}>
                        <button className='text-base text-left px-2 py-2  hover:bg-white hover:text-black focus-within:bg-white w-full cursor-pointer focus-within:text-black'>
                            Draw
                        </button>
                    </Link>
                    <Link to={'/dra'} onClick={() => setIsOpen(false)} >
                        <button className='text-base text-left px-2 py-2  hover:bg-white hover:text-black focus-within:bg-white w-full cursor-pointer focus-within:text-black'>
                            Ladder
                        </button>
                    </Link>
                    <Link to={'/dra'} onClick={() => setIsOpen(false)}>
                        <button className='text-base text-left px-2 py-2  hover:bg-white hover:text-black focus-within:bg-white w-full cursor-pointer focus-within:text-black'>
                            News
                        </button>
                    </Link>
                    <Link to={'/dra'} onClick={() => setIsOpen(false)}>
                        <button className='text-base text-left px-2 py-2  hover:bg-white hover:text-black focus-within:bg-white w-full cursor-pointer focus-within:text-black'>
                            Players
                        </button>
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default Navbar