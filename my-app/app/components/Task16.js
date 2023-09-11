import React from 'react'
import Task16child from './Task16child'

const Task16 = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center text-white text-center'>
        <div>
        <h1 className=' text-4xl font-bold m-2'>The main file</h1>
        <div className='m-2 text-xl font-light'><Task16child/></div>
        </div>
    </div>
  )
}

export default Task16