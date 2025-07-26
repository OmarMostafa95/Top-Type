import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Game from '../Game/Game';

export default function Home() {
const [difficulty,setdifficulty]=useState(null)


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

    return (<>
        {!difficulty &&(
            <div className='flex flex-col gap-4 items-center mt-10'>
                <h1 className='text-2xl font-bold text-gray-500'>
                    Choose Diffuclty
                </h1>
                <div className='flex gap-4'>
                    <button onClick={()=> setdifficulty("easy")} className="btn text-1xl font-bold text-gray-700">Easy</button>
                    <button onClick={()=> setdifficulty("Normal")} className="btn text-1xl font-bold text-gray-700">Normal</button>
                    <button onClick={()=> setdifficulty("Hard")} className="btn text-1xl font-bold text-gray-700">Hard</button>
                </div>
            </div>
        )}
        {difficulty && <Game difficulty={difficulty} />}
            </>)
}