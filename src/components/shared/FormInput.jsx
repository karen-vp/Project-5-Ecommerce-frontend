import React, { useContext } from 'react'
import '../../App.css';
import { UserContext } from '../../context/userContext'

function Form({ tipo, value}) {
  const userCtx = useContext(UserContext)

  const { handleChange, editMode, entryMode, handleChangeUpdate } = userCtx

  const options = {
    name: { titulo: 'Nombre de usuario', type: 'text' },
    email: { titulo: 'Direccion de correo electronico', type: 'email' },
    password: { titulo: 'Contraseña', type: 'password' },
  }

  return (
    <>
      <label htmlFor={tipo}>{options[tipo].titulo}</label>
      <div>
        <input
          id={tipo}
          name={tipo}
          type={options[tipo].type}
          required
          value = {value}
          onChange={editMode ? (e) => handleChangeUpdate(e):
            (e) => handleChange(e)
          }
        />
      </div>
    </>
  )
}
export default Form