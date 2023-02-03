import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './../../context/userContext'
import ButtonPaypal from '../shared/ButtonPaypal'


function Checkout() {
    const ctx = useContext(UserContext)
    const { authStatus, cart, setCart} = ctx
    const [amount, setAmount] = useState()
    const[isShopping, setIsShopping] = useState(false)

    const setTotalAmount = ()=>{
        setAmount = cart.map(({price,quantity})=>price*quantity).reduce((a,b)=>a+b,0)
    }

    useEffect(()=>{
        if(!!cart) setIsShopping(true)
    },[cart])
    
    return (
        <div className='container-sm default-container'>
            {authStatus ? (<>
                <div>
                    <h3>Tu carrito de compras</h3> 
                    {isShopping ? setTotalAmount(): null}
                    <div className='btn-paypal'>
                        <ButtonPaypal currency={'USD'} showSpinner={false} amount={amount}></ButtonPaypal>
                    </div>
                </div>

            </>) : 
            <div>
                <h3>Inicia sesión para añadir cosas a tu carrito</h3>
            </div>}
        </div>
    )
}

export default Checkout