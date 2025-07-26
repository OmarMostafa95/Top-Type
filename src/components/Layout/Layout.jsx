import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar3 from '../Navbar2/Navbar3'
import { useFormik } from 'formik'


export default function Layout() {
    
    return (
        <>
            <Navbar3 />
            <div className='min-h-screen min-w-full container mx-auto py-32 bg-zinc-900'>
                <Outlet>
                </Outlet>
                
            </div>
        </>
    )
}
