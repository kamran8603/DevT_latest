import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((store)=>store.user)
  return (
    // it is only be called when the user is present
    user && (
      <div><EditProfile user={user}/></div>
    )
    
  )
}

export default Profile