import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Login() {
    async function handlelogin(canba) {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/auth/signin`, canba);
        if (data.message == "success") {
            Navigate('/')
        }

    }
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handlelogin
    })
    return (
        <>


            <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-blue " >Your email</label>
                    <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='ex-abc@gmail.com' required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-blue">Your password</label>
                    <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
                </div>



                <button type="submit" className="text-white bg-gray-900 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

        </>
    )
}
