import React, { useContext } from 'react'
import '../../App.css';
import { UserContext } from './../../context/userContext'
import Form from './../shared/Form'

function Register() {
    const userCtx = useContext(UserContext)

    const { registerUser, formData } = userCtx

    const sendData = (event) => {
        event.preventDefault()
        registerUser(formData)
    }
        return (
            <div>
                <h2>Crear cuenta</h2>

                <form onSubmit={(e) => sendData(e)}>
                    <Form tipo='name' />
                    <Form tipo='email' />
                    <Form tipo='password' />

                    <button type='submit'>
                        Registrarme
                    </button>
                </form>
            </div>
        )
    }

    export default Register