'use client'
import React from 'react'
import { useState } from 'react';
const Task8 = () => {

    const [inputnameValue, setInputnameValue] = useState('');
    const [inputclassValue, setInputclassValue] = useState('');
    const [inputenglishValue, setInputenglishValue] = useState('');
    const [inputchemValue, setInputchemValue] = useState('');
    const [inputurduValue, setInputurduValue] = useState('');
    const [inputphysicValue, setInputphysicValue] = useState('');
    const [inputmathsValue, setInputmathsValue] = useState('');
    // const { inputenglishValue } = this.props;
    // const { inputchemValue } = this.props;
    // const { inputurduValue } = this.props;
    // const { inputphysicValue } = this.props;
    // const { inputmathsValue } = this.props;
    // const { number } = this.props;
    let inputchemValueg;
    let grade;
    if ( inputchemValueg > 80) {
        grade = 'A Grade';
      } else if (inputchemValue > 70) {
        grade = 'B Grade';
      } else if (inputchemValue > 50) {
        grade = 'C Grade';
      } else {
        grade = 'F Grade';
      }
  
    if (inputurduValue > 80) {
        grade = 'A Grade';
      } else if (inputurduValue > 70) {
        grade = 'B Grade';
      } else if (inputurduValue > 50) {
        grade = 'C Grade';
      } else {
        grade = 'F Grade';
      }
  
    if (inputphysicValue > 80) {
        grade = 'A Grade';
      } else if (inputphysicValue > 70) {
        grade = 'B Grade';
      } else if (inputphysicValue > 50) {
        grade = 'C Grade';
      } else {
        grade = 'F Grade';
      }
  
    if (inputmathsValue > 80) {
        grade = 'A Grade';
      } else if (inputmathsValue > 70) {
        grade = 'B Grade';
      } else if (inputmathsValue > 50) {
        grade = 'C Grade';
      } else {
        grade = 'F Grade';
      }
  
  
    return (
        <div className=' flex justify-center items-center h-full'>
            <div className='m-2  p-10 rounded-xl lg:w-1/2 text-center bg-slate-900 text-white space-y-4'>
                <h1 className=' text-5xl font-extralight'>Student Marksheet Generator</h1>

                <div >
                    <h2 className='py-2 text-xl font-extralight w-full flex justify-center '>
                        Enter the details below (score out of 100)
                    </h2>
                    <table className='w-full divide-y divide-slate-700'>
                        <tbody>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>Student Name</td>
                                <td><input className='text-black' placeholder='Full Name' value={inputnameValue} onChange={(e) => setInputnameValue(e.target.value)} /></td>
                            </tr>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>Class(11/21)</td>
                                <td><input type='number' min={11} max={12} className='text-black' placeholder='Class' value={inputclassValue} onChange={(e) => setInputclassValue(e.target.value)} /></td>
                            </tr>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>English</td>
                                <td><input type='number' min={0} max={100} className='text-black' placeholder='Obtained Marks' value={inputenglishValue} onChange={(e) => setInputenglishValue(e.target.value)} /></td>
                            </tr>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>Math</td>
                                <td><input type='number' min={0} max={100} className='text-black' placeholder='Obtained Marks' value={inputmathsValue} onChange={(e) => setInputmathsValue(e.target.value)} /></td>
                            </tr>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>Urdu</td>
                                <td><input type='number' min={0} max={100} className='text-black' placeholder='Obtained Marks' value={inputurduValue} onChange={(e) => setInputurduValue(e.target.value)} /></td>
                            </tr>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>Chem</td>
                                <td><input type='number' min={0} max={100} className='text-black' placeholder='Obtained Marks' value={inputchemValue} onChange={(e) => setInputchemValue(e.target.value)} /></td>
                            </tr>
                            <tr className='p-2 divide-x divide-slate-700'>
                                <td>Physic</td>
                                <td><input type='number' min={0} max={100} className='text-black' placeholder='Obtained Marks' value={inputphysicValue} onChange={(e) => setInputphysicValue(e.target.value)} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className=' flex justify-center '>
                        <button className='p-1 m-2 rounded-md border border-green-600 text-green-600 bg-white hover:text-white hover:bg-green-600 '>
                            Generate
                        </button>
                    </div>

                    {/* result */}

                    <div className=''>
                        <h2 className=' uppercase text-xl font-semibold'>Mark Sheet</h2>
                        <div className='w-full grid grid-cols-2 m-2 text-sm'>
                            <h3>Student Name:{inputnameValue}</h3>
                            <h3>Class:{inputclassValue}</h3>
                        </div>
                        <table className='w-full divide-y divide-slate-700'>
                            <thead className=' text-sm'>
                                <tr >
                                    <th>No.</th>
                                    <th>Subjects</th>
                                    <th>Marsk Scored</th>
                                    <th>Total Marks</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody className=' text-xs'>
                                <tr className='p-2 divide-x divide-slate-700'>
                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>1</td>
                                    <td>English</td>
                                    <td>{inputenglishValue}</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>2</td>
                                    <td>Maths</td>
                                    <td>{inputmathsValue}</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>3</td>
                                    <td>Urdu</td>
                                    <td>{inputurduValue}</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>4</td>
                                    <td>Chem</td>
                                    <td>{inputchemValue}</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>5</td>
                                    <td>Physics</td>
                                    <td>{inputphysicValue}</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task8