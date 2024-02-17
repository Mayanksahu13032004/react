import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white '>
      user: {userid}
    </div>
  )
}

export default User
