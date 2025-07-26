import React, { useState } from 'react'
import { useAuth, AuthProvider } from '../Auth/AuthProvider';
import { NavLink } from 'react-router-dom';
import { Facebook, Grab, Home } from 'lucide-react';
export default function Navbar3() {
    const { currentUser, logout } = useAuth()
    const [dropdown, setDropdown] = useState(false);
    const toggleDrowndown = () => {
        setDropdown(!dropdown);
    };
    return (
        <>
            <nav className='bg-gray-500 fixed top-0 left-0 right-0'>
                <div className='container justify-between mx-2 my-1 py-1 flex flex-row' >
                    {/* left side */}
                    <div className="flex items-center space-x-2">
                        <Grab />
                        <span className="text-lg font-bold text-gray-800">Top Type</span>
                        <ul>
                            <li><NavLink to='/' ><Home className='mx-2' /></NavLink></li>
                        </ul>
                    </div>
                    {/* right side */}
                    <div className='fixed right-2 '>
                        <ul className='flex flex-row'>
                            {currentUser ? (
                                <>
                                    <li className='p-0 text-lg shadow-sm shadow-gray-800 text-gray font-bold fixed right-12 hover:border border-gray-700 px-2 rounded-md transition '><button onClick={toggleDrowndown} >
                                        {currentUser.name}
                                    </button>
                                </li>
                                    {dropdown && (
                                        <div className='absolute right-0 top-8 mt-1 w-32 bg-white shadow-lg rounded-lg z-50'>
                                            <button
                                                onClick={logout}
                                                className=' block w-full text-left px-4 py-2 text-sm text-gray-800  hover:bg-gray-400 shadow-lg rounded-lg'
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                
                        </>) : (
                        <>
                            <li><NavLink to='/login' className='p-2 text-lg font-medium hover:text-gray-400'>Login</NavLink></li>
                            <li><NavLink to='/Register' className='p-2 text-lg font-medium hover:text-gray-400'>Register</NavLink></li>
                        </>
                        )
                            }
                    </ul>
                </div>
            </div>
        </nav >
        </>
    )
    
}
