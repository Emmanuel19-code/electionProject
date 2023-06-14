import React from 'react'

const SubmittedBallot = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h3 className='text-2xl font-bold m-1'>ELECTIONS</h3>
      <p>You have already voted for this election</p>
      <p className='bg-blue-500 p-3 m-1 text-white'>View Your Ballot</p>
    </div>
  )
}

export default SubmittedBallot