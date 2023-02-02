import React, { useContext } from 'react'
import { UserContext } from './../../context/userContext'

function Checkout() {
    const ctx = useContext(UserContext)
    const { authStatus } = ctx
    return (
        <div className='container-sm default-container'>
            {authStatus ? (<>
                <div>
                    <h3>Tu carrito de compras</h3>
                    
                </div>

            </>) : 
            <div>
                <h3>Inicia sesión para añadir cosas a tu carrito</h3>
            </div>}
        </div>
    )
}

export default Checkout