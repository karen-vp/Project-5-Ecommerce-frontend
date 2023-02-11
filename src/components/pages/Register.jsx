import React, { useContext } from 'react'
import '../../App.css';
import { useNavigate} from 'react-router-dom'
import { UserContext } from './../../context/userContext'
import FormInput from '../shared/FormInput'


function Register() {
    const userCtx = useContext(UserContext)

    const { registerUser, formData, load, setLoad}  = userCtx

    const navigate = useNavigate()

    const sendData = (event) => {
        event.preventDefault()
        registerUser(formData)
        navigate('/login',{ replace: true })
    }

    return (
        <div className='center-container'>
            {load ?
            (<img src="https://cdn.dribbble.com/users/8424/screenshots/1036999/media/9df687212c8772ec6bebffdfc728a5f5.gif" alt="loading" className='img-collection'/>) 
            :
            (<div className='form-container'>
                <h2>Crear cuenta</h2>

                <form onSubmit={(e) => sendData(e)}>
                    <FormInput tipo='name' />
                    <FormInput tipo='email' />
                    <FormInput tipo='password' />

                    <button type='submit'>
                        Registrarme
                    </button>
                </form>
            </div>
            )}
        </div>
    )
}

export default Register