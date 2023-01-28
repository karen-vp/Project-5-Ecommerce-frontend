import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './../../context/userContext'


function Profile() {
  const {authStatus}=useContext(UserContext)

  return (
    <div>
      {authStatus ?(<>
      <div>tu perfil</div></>):<div>
        Para ver tu perfil log in</div>}
    </div>
  )
}

export default Profile