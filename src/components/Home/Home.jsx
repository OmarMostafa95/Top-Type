import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
    useEffect(() => {
        const success = localStorage.getItem('loginSuccess');
        if (success === 'true') {
            toast.success('Login successful!', {
                position: 'bottom-left',
                hideProgressBar: true,
                autoClose: 2000,
                closeOnClick: true,
                theme: 'dark',
            });
            localStorage.removeItem('loginSuccess');
        }
    }, []);

    return <div className="relative">{/* home content here */}</div>;
}