import React from 'react'

function Coursename({name}) {
  return (
    <div className='bg-blue-500 rounded-md w-fit py-2 px-3'>
      <h1 className='text-white text-xs'>{name}</h1>
    </div>
  )
}

export default Coursename
