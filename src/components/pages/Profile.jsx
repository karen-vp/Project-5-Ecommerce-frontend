import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './../../context/userContext'


function Profile() {
  const { authStatus, user, verifyingToken} = useContext(UserContext)

  useEffect(() => {
    verifyingToken()
  }, [])
 

  return (
    <div className='container-sm default-container'>
      {authStatus ? (<>
        <div>
          <h1 className='center-title'>Mi Perfil</h1>

            <h3>Información</h3>
            <p>Nombre de usuario:</p>
            <input type="text" value={user.usuario.name}></input>
            <p>Correo electronico:</p> 
            <input type="text" value={user.usuario.email}></input>
 

        </div></>) : <div>
        Para ver tu perfil log in</div>}
    </div>
  )
}

export default Profile