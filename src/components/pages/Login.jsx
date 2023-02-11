import React, { useContext, useEffect } from 'react'
import '../../App.css';
import { useNavigate, Link} from 'react-router-dom'
import { UserContext } from './../../context/userContext'
import FormInput  from './../shared/FormInput'

function Login() {
  const userCtx = useContext(UserContext)
  const { loginUser, authStatus, verifyingToken, formData, getCurrentUser} = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    if(getCurrentUser()) verifyingToken()

    if (authStatus) {
      navigate('/',{ replace: true })
    }
  }, [authStatus])

  if (authStatus) return null

  const sendData = (event) => {
    event.preventDefault()
    loginUser(formData)
  }

  return (
    <div className='center-container'>
      <div className='form-container'>
        <h2>Iniciar sesión</h2>
        <form onSubmit={(e) => sendData(e)}>
          <FormInput tipo='email' />
          <FormInput tipo='password' />
          <button type='submit' className=''>
            Comenzar
          </button>
        </form>
        <span>No eres un miembro todavía?</span>
        <Link to='/register' className='link-item link-pop' replace>Regístrate</Link>
      </div>
    </div>

  )
}

export default Login