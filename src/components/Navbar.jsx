import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    // mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // link class
    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-blue-500 text-white hover:bg-blue-700 rounded-md px-4 py-2'
            : 'text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-4 py-2';


    return (
        <nav className='bg-gray-900'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0'>
                        <NavLink to="/" className='text-white text-2xl font-bold'>
                            Todo App
                        </NavLink>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <NavLink to="/" className={linkClass}>
                                Home
                            </NavLink>
                            <NavLink to="/create" className={linkClass}>
                                Create
                            </NavLink>
                            <NavLink to="/todo-list" className={linkClass}>
                                Todo Lists
                            </NavLink>
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        <button
                            type='button'
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className='md:hidden flex flex-col items-center justify-center'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/create" className={linkClass}>
                            Create
                        </NavLink>
                        <NavLink to="/todo-list" className={linkClass}>
                            Todo Lists
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar