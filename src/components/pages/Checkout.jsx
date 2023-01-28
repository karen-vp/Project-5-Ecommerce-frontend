import React, {useContext} from 'react'
import { UserContext } from './../../context/userContext'

function Checkout() {
    const ctx = useContext(UserContext)
    const { authStatus } = ctx
    return (
        <>
            {authStatus ? (<>
                <div>tu carrito de compras</div></>) : <div>
                No puedes ver tu carrito de compras</div>}

        </>
    )
}

export default Checkout