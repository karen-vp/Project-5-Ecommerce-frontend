import { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({ username: null, email: null })
  const [authStatus, setAuthStatus] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',

  })

  const handleChange = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const registerUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post('/customers/signup', dataForm)
      // localStorage.setItem('token', res.data.token)
      // setAuthStatus(true)
      setSuccess(true)
    } catch (error) {
      console.log(error)
      setError(false)
    }
  }

  const updateUser = async (id, dataForm)=>{
    const form = {
      id,
      name : dataForm.name,
      email : dataForm.email
    }
    try {
      const res = await clienteAxios.put('/customers/update', form)
      verifyingToken()

    } catch (error) {
      console.log(error)
    }
  }

  const verifyingToken = async () => {
    const token = localStorage.getItem('token')

    if (token) {
      clienteAxios.defaults.headers.common['x-auth-token'] = token
    } else {
      delete clienteAxios.defaults.headers.common['x-auth-token']
    }

    try {
      const res = token && (await clienteAxios.get('/customers/verify'))
      setUser(res.data)
      setAuthStatus(true)
    } catch (error) {
      console.log('Error Verificando token', error)
    }
  }

  const loginUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post('/customers/login', dataForm)
      localStorage.setItem('token', res.data.token)
      setAuthStatus(true)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setAuthStatus(false)
  }


  const data = {
    registerUser, 
    loginUser, 
    handleChange, 
    verifyingToken, 
    logout, 
    formData, 
    user, 
    authStatus, 
    success,
    error,
    setSuccess,
    setError,
    setUser,
    updateUser,
  }
  console.log('User Context', data)
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

