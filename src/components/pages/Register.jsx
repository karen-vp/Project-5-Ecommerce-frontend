import React, { useContext, useEffect} from 'react'
import '../../App.css';
import { UserContext } from './../../context/userContext'
import FormInput  from '../shared/FormInput'


function Register() {
    const userCtx = useContext(UserContext)

    const { registerUser, formData, success, error} = userCtx

    const sendData = (event) => {
        event.preventDefault()
        registerUser(formData)
        event.target.reset();
    }


    return (
        <div className='center-container'>
            <div className='form-container'>
                <h2>Crear cuenta</h2>

                <form onSubmit={(e) => sendData(e)}>
                    <FormInput tipo='name' />
                    <FormInput tipo='email' />
                    <FormInput  tipo='password' />

                    <button type='submit'>
                        Registrarme
                    </button>
                </form>
                {success && (
                    <div className='alert alert-success m4' role='alert'>
                        Se registro usuario con exito
                    </div>
                )}
                {error && (
                    <div className='alert alert-danger m4' role='alert'>
                        Hubo un error creando usuario
                    </div>
                )}
            </div>
        </div>
    )
}

export default Register