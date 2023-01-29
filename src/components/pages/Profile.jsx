import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './../../context/userContext'


function Profile() {
  const { authStatus, user, verifyingToken } = useContext(UserContext)

  useEffect(() => {
    verifyingToken()
  }, [])
 

  return (
    <div>
      {authStatus ? (<>
        <div>
          <h1>Perfil</h1>

            <p>Nombre de usuario: {user.usuario.name}</p>
            <p>Correo electronico: {user.usuario.email}</p>
 

        </div></>) : <div>
        Para ver tu perfil log in</div>}
    </div>
  )
}

export default Profile