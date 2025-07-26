import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Register1() {
    const navigate = useNavigate();
    function HandleRegister(values) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === values.email)) {
            alert('Email is already used.');
            return;
        }
        if (values.password !== values.rePassword) {
            alert(`Password doesn't match`)
            return;
        }
        users.push(values);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Register success.');
        navigate('/login')
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        },
        onSubmit: HandleRegister
    });

    return (
        <>
            <div className="max-w-md mx-auto py-5">
                <h2 className='text-3xl text-gray-400 py-2'>Register now</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="relative z-0 w-full mb-3 group py-1">
                        <input type="text" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="" required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user</label>
                    </div>

                    <div className="relative z-0 w-full mb-3 group py-1">
                        <input type="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="" required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>

                    <div className="relative z-0 w-full mb-3 group py-1">
                        <input type="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="" required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <div className="relative z-0 w-full mb-3 group py-1">
                        <input type="password" onBlur={formik.handleBlur} value={formik.values.rePassword} onChange={formik.handleChange} name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="" required />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>
                    <p className="text-sm text-gray-400 mt-4 mb-2 ">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </>
    )
}
