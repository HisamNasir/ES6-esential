'use client'
import React, { useState } from 'react';
function Task3() {
  const [dateofbirthh, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);
  const handleInputChange = (event) => {
  setDateOfBirth(event.target.value); };
  const calculateAge = () => {
    const dateOfBirth = new Date(dateofbirthh);
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    setAge(age);
  };
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='bg-gray-200 p-10 rounded-xl'>
        <h1 className=' font-bold text-xl my-2'>Age Calculator</h1>
        <form className='space-x-2'>
          <label>
            Select Date:
            <input className='p-2 rounded-xl m-2 focus:ring-0 focus:outline-transparent'
              type="date"
              value={dateofbirthh}
              onChange={handleInputChange}/>
          </label>
          <button className='rounded-xl m-2 bg-slate-100 outline outline-1 p-2' type="button" onClick={calculateAge}>
            Calculate Age
          </button>
        </form>
        {age !== null && (<p>Your are: {age} years old.</p>)}
      </div>
    </div>
  );
}
export default Task3;
