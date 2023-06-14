import React from 'react'
import ElectionSheet from '../components/ElectionSheet'

const HomePage = () => {
  return (
    <div>
     <div className='flex flex-col items-center justify-center m-2'>
      <ElectionSheet/>
      <ElectionSheet/>
      <ElectionSheet/>
     </div>
     <div className='flex items-center justify-center mb-10'>
        <button className='bg-teal-400 m-1 p-1 text-white'>PREVIEW</button>
        <button className='bg-blue-500 m-1 p-1 text-white'>SUBMIT</button>
     </div>
    </div>
  )
}

export default HomePage