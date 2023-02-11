import { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({ username: null, email: null })
  const [authStatus, setAuthStatus] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',

  })
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  })
  const [editMode, setEditMode] = useState(false)
  const [load, setLoad] = useState(false)

  const getCurrentUser = ()=>{
   const currentToken = localStorage.getItem('token') || ''
   return currentToken

  }
 
  const handleChange = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleChangeUpdate = (event)=>{
    event.preventDefault()
    setUserData({ 
      ...userData,
      [event.target.name]: event.target.value, })
  }

  const registerUser = async (dataForm) => {
    try {
      setLoad(true)
     await clienteAxios.post('/customers/signup', dataForm)
      setLoad(false)
      
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }

  const updateUser = async (id, dataForm)=>{
    const form = {
      id,
      name : dataForm.name,
      email : dataForm.email
    }
    try {
      await clienteAxios.put('/customers/update', form)
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
    setUser,
    updateUser,
    setUserData,
    handleChangeUpdate,
    setEditMode,
    setLoad,
    getCurrentUser,
    load, 
    formData, 
    user, 
    authStatus, 
    editMode, 
    userData, 
    
  }
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

