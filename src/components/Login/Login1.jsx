import axios from 'axios'
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

export default function Login1() {
    const { login } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    function HandleLogin(logs) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        setLoading(true);
        const isUser = users.find(
            user => user.email === logs.email && user.password === logs.password
        );
        if (!isUser) {
            setLoading(false);
            alert('Invalid Email or Password');
            return;
        }
        localStorage.setItem('currentUser', JSON.stringify(isUser));
        login(isUser)
        setLoading(false);
        localStorage.setItem('loginSuccess', 'true');
        navigate('/')
        
    }

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: HandleLogin
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300 ">Your email</label>
                    <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="bg-zinc-900 border border-zinc-700 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex@example.com" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Your password</label>
                    <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="bg-zinc-900 border border-zinc-700 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  >Submit</button>
                {loading && (
                    <p className="text-gray-400 text-sm mt-2">Logging in...</p>
                )}
            </form>
        </>
    )
}
