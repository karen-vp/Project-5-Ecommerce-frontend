import React, { useContext } from 'react'
import '../../App.css';
import { UserContext } from './../../context/userContext'
import Form from './../shared/Form'


function Register() {
    const userCtx = useContext(UserContext)

    const { registerUser, formData, setFormData, success, error, setError, setSuccess } = userCtx

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
                    <Form tipo='name' />
                    <Form tipo='email' />
                    <Form tipo='password' />

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