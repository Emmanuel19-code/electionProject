import React from 'react'
import Profile from './Profile'

const ElectionSheet = () => {
  return (
    <div className='md:w-3/6 h-96 bg-white shadow p-2 m-2'>
            <h2 className='border-b border-black p-1 font-bold flex-1'>Test Position One</h2>
        <div className='flex items-center m-2'>
            <p className='flex-1'>Test Position One</p>
            <button className='bg-green-700 px-2 text-white'>RESET</button>
        </div>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
    </div>
  )
}

export default ElectionSheet