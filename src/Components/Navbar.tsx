import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed top-0 w-full flex flex-col justify-between items-center pt-4 bg-gray-900 text-white gap-3">
            {/* Logo Section */}
            <div className="flex gap-6 items-end text-3xl font-bold ">
                <h1>Youtube Live Sports</h1>

            </div>
            {/* Text Section */}
            <div className="flex items-center justify-evenly gap-3 border-t-2 border-y-white w-full py-4">
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
        </header>
    )
}

export default Navbar