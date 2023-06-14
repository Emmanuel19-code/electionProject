import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-500 p-2 flex items-center sticky top-0 shadow-md cursor-pointer'>
        <div className='flex-1'>
            <p className='text-white'>Voting System</p>
        </div>
        <div className='flex items-center'>
           <p className='text-white m-1'>Manuel</p>
           <p className='text-white m-1'>logOut</p>
        </div>
    </div>
  )
}

export default Navbar