import React from 'react'

const Profile = ({name}) => {
  return (
    <div className='mt-5'>
        <div className='flex items-center m-2'>
            <input type='radio' name='candidate' value={name}/>
            <div className='ml-2 bg-blue-600 text-white p-1'>
                <p>Platform</p>
            </div>
            <p className='ml-4 font-bold'>Kofi Asamoah</p>
        </div>
    </div>
  )
}

export default Profile