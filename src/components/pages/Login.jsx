import React, { useContext, useEffect } from 'react'
import '../../App.css';
import { useNavigate, Navigate, Link} from 'react-router-dom'
import { UserContext } from './../../context/userContext'
import Form from './../shared/Form'

function Login() {
  const userCtx = useContext(UserContext)
  const { loginUser, authStatus, verifyingToken, formData } = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    verifyingToken()

    if (authStatus) {
      navigate('../ecommerce-ropa-frontend/profile')
    }
  }, [authStatus])

  if (authStatus) return null

  const sendData = (event) => {
    event.preventDefault()
    loginUser(formData)
  }

  const onNavigate = (history, locationDescriptor)=>history.replace(locationDescriptor)

  return (
    <div className='center-container'>
      <div className='form-container'>
        <h2>Iniciar sesión</h2>
        <form onSubmit={(e) => sendData(e)}>
          <Form tipo='email' />
          <Form tipo='password' />
          <button type='submit' className=''>
            Comenzar
          </button>
        </form>
        <span>No eres un miembro todavía?</span>
        <Link to='../ecommerce-ropa-frontend/register' className='link-item link-pop' replace>Regístrate</Link>
      </div>
    </div>

  )
}

export default Login