import React, { useContext, useEffect } from 'react'
import '../../App.css';
import { useNavigate } from 'react-router-dom'
import { UserContext } from './../../context/userContext'
import Form from './../shared/Form'

function Login() {
  const userCtx = useContext(UserContext)
  const { loginUser, authStatus, verifyingToken, formData } = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    verifyingToken()

    if (authStatus) {
      navigate('/profile')
    }
  }, [authStatus])

  if (authStatus) return null

  const sendData = (event) => {
    event.preventDefault()
    loginUser(formData)
  }

  return (
    <div className='container'>
      <h2>Iniciar sesión</h2>

      <form onSubmit={(e) => sendData(e)}>
        <Form tipo='email' />
        <Form tipo='password' />
        <button type='submit' className=''>
          Comenzar
        </button>
      </form>
    </div>
  )
}

export default Login