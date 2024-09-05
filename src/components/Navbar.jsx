import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    {/* Set the active link class */}
    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-blue-500 text-white hover:bg-blue-700 hover:text-white rounded-md px-4 py-2'
            : 'text-white hover:bg-blue-700 hover:text-white rounded-md px-4 py-2';


    return (
        <nav className='bg-gray-900 border-b border-blue-800'>
            <div className='mx-auto -mr-0.5 max-w-7xl px-2 sm:px-6 lg:px-2'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-end md:items-stretch md:justify-start'>
                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>

                                {/* Home */}
                                <NavLink to="/" className={linkClass}>
                                    Home
                                </NavLink>

                                {/* Create */}
                                <NavLink to="/create" className={linkClass}>
                                    Create
                                </NavLink>

                                {/* Todo-Lists */}
                                <NavLink to="/todo-list" className={linkClass}>
                                    Todo Lists
                                </NavLink>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar