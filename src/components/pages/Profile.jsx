import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './../../context/userContext'
import FormInput from '../shared/FormInput'


function Profile() {
  const userCtx = useContext(UserContext)
  const { authStatus, user, verifyingToken, updateUser, setEditMode, setUserData, editMode, userData } = userCtx


  const [id, setId] = useState(null)
  const [error, setError] = useState(null)


  const sendDataToUpdateUser = (event) => {
    event.preventDefault()
    updateUser(id, userData)

    setId(null)
    setEditMode(false)
    setError(null)
    event.target.reset();
  }

  const activateEditMode = (element) => {
    setEditMode(true)
    setId(user.usuario._id)
    setUserData({
      name: user.usuario.name,
      email: user.usuario.email
    })

  }

  useEffect(() => {
    verifyingToken()
    setEditMode(false)
  }, [])

  return (
    <div className='container-sm default-container'>
      {authStatus ? (<>
        <div>
          <h1 className='center-title'>Mi Perfil</h1>

          <h3>Información</h3>
          {editMode ? (< form onSubmit={(e) => sendDataToUpdateUser(e)}>
            <FormInput tipo='name' value={userData.name} />
            <FormInput tipo='email' value={userData.email} />

            <button type='submit'>
              Actualizar
            </button>
          </form>)

            : (<div>
              <p>Nombre de usuario: {user.usuario.name}</p>
              <p>Email: {user.usuario.email}</p>
              <button className='btn-main' onClick={(e) => activateEditMode(e)}>Editar</button>
            </div>)}
          
          {error ? error : null}
        </div></>) : <div>
        Para ver tu perfil log in</div>
      }
    </div >
  )
}

export default Profile