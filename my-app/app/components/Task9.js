'use client'
import { useState } from 'react';

const passwordSize = () => {
    const min = 10000000;
    const max = 99999999; // Maximum 8-digit number
    const randomPassword = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPassword.toString();
};
export default function Task9() {
    const [password, setPassword] = useState('');
    const handleRandomPassword = () => {
        const newPassword = passwordSize();
        setPassword(newPassword);
    };
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className=' text-center py-10 px-20 text-white rounded-xl bg-slate-900'>
                <h1 className='text-3xl font-thin'>Random 8-Digit Password Generator</h1>
                <button className='my-10 py-2 px-4 bg-slate-600 rounded-xl hover:bg-slate-700 hover:animate-pulse'
                    onClick={handleRandomPassword}>
                    Generate Password
                </button>
                {password && (
                    <div className='flex w-full justify-center my-10'>
                        <h2 className='flex items-center'>Password: </h2>
                        <p className='mx-2 text-xl animate-pulse'> {password}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
