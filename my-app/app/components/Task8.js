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
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [grade, setGrade] = useState(0);

    const calculateTotalResult=()=>{
        const numberValue1 = parseFloat(inputchemValue);
        const numberValue2 = parseFloat(inputenglishValue);
        const numberValue3 = parseFloat(inputmathsValue);     //converting string number to numbers so i can use math functions on it
        const numberValue4 = parseFloat(inputphysicValue);
        const numberValue5 = parseFloat(inputurduValue);

        const sum=numberValue1+numberValue2+numberValue3+numberValue4+numberValue5;  //addition
        const percent=sum/500*100;  //Percentage
        if (percent > 90) {
            setGrade('A');
          } else if (percent > 75) {
            setGrade('B');
          } else if (percent > 50) {        //Grade
            setGrade('C');
          } else {
            setGrade('F');
          }

        setTotal(sum);              //for clling
        setPercentage(percent);
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
                        <tbody className=' divide-y divide-slate-700'>
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
                        <button onClick={calculateTotalResult} className='p-2 px-4 m-2 rounded-md border border-green-600 text-green-600 bg-white hover:text-white hover:bg-green-600 '>
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

                                </tr>
                            </thead>
                            <tbody className=' text-xs divide-y divide-slate-700'>
                                <tr className='p-2 divide-x divide-slate-700'>
                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>1</td>
                                    <td>English</td>
                                    <td>{inputenglishValue}</td>
                                    <td>100</td>

                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>2</td>
                                    <td>Maths</td>
                                    <td>{inputmathsValue}</td>
                                    <td>100</td>

                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>3</td>
                                    <td>Urdu</td>
                                    <td>{inputurduValue}</td>
                                    <td>100</td>

                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>4</td>
                                    <td>Chem</td>
                                    <td>{inputchemValue}</td>
                                    <td>100</td>

                                </tr>
                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>5</td>
                                    <td>Physics</td>
                                    <td>{inputphysicValue}</td>
                                    <td>100</td>

                                </tr>
                            </tbody>
                                <tfoot className=' text-sm'>

                                <tr className='p-2 divide-x divide-slate-700'>
                                    <td>Obtained Marks:<a className='font-bold'>{total}</a></td>
                                    <td>Total Marks:<a className='font-bold'>500</a></td>
                                    <td>Percentage: <a className='font-bold'>{percentage}</a>%</td>
                                    <td>Grade: <a>{grade}</a></td>

                                </tr>
                                </tfoot>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task8