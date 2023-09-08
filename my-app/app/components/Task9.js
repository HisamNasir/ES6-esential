'use client'
import { useState } from 'react';



export default function Task9() {

    const [password, setPassword]=useState('');

    const generateRandomPassword=() => {
      const chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
      const passwordLength=8;
      let generatedPassword='';
      for (let i=0;i<passwordLength;i++) {
        const randomNumber=Math.floor(Math.random()*chars.length);
        generatedPassword+=chars.charAt(randomNumber);
      }
      setPassword(generatedPassword);};

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className=' text-center py-10 px-20 text-white rounded-xl bg-slate-900'>
                <h1 className='text-3xl font-thin'>Random Password</h1>
                <button className='my-10 py-2 px-4 bg-slate-600 rounded-xl hover:bg-slate-700 hover:animate-pulse'
                    onClick={generateRandomPassword}>
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
