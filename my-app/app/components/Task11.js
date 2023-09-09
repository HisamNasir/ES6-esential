'use client'
import React from 'react'
import { useState } from 'react';

const Task11 = () => {
    const [dataForm, setDataForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataForm({...dataForm,[name]: value});
    };
    const handleSubmit = () => {
        const jsonData = JSON.stringify(dataForm);
        console.log(jsonData);
    };
    return (
        <div className='text-white h-full flex justify-center items-center'>
            <div className='p-10 bg-slate-900 rounded-xl flex flex-col items-center'>
                <div className='w-20 m-10 p-4 bg-slate-700 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                <div className=' space-y-2 my-2 w-full'>
                    <h1>First Name</h1>
                    <input type='text' id="firstName" name="firstName" value={dataForm.firstName} onChange={handleInputChange} placeholder='Enter First Name' className=' bg-slate-700 focus:outline-none p-2 rounded-xl w-full' />
                </div>
                <div className=' space-y-2 my-2 w-full'>
                    <h1>Last Name</h1>
                    <input
                        type="text" id="lastName" name="lastName" value={dataForm.lastName} onChange={handleInputChange} type='text' placeholder='Enter Last Name' className=' bg-slate-700 focus:outline-none p-2 rounded-xl w-full' />
                </div>
                <div className=' space-y-2 my-2 w-full'>
                    <h1>Email</h1>
                    <input
                        type="email" id="email" name="email" value={dataForm.email} onChange={handleInputChange} placeholder='Enter Email' className=' bg-slate-700 focus:outline-none p-2 rounded-xl w-full' />
                </div>
                <div className=' space-y-2 my-2 w-full'>
                    <h1>Address</h1>
                    <textarea id="address" name="address" value={dataForm.address} onChange={handleInputChange} placeholder='Enter Address' className=' bg-slate-700 focus:outline-none p-2 rounded-xl resize-none w-full' />
                </div>
                <div className=' space-y-2 my-2 w-full'>
                    <button type="button" onClick={handleSubmit} placeholder='Enter Email' className=' bg-slate-700 focus:outline-none p-2 rounded-xl w-full'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Task11