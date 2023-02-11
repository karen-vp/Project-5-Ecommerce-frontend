import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './../../context/userContext'
import ButtonPaypal from '../shared/ButtonPaypal'
import { CartContext } from './../../context/cartProvider'
import ShowProducts from './ShowProducts'


function Checkout() {
    const checkoutCtx = useContext(CartContext)
    const { cart, setCart } = checkoutCtx

    const userCtx = useContext(UserContext)
    const { authStatus } = userCtx
    const [amount, setAmount] = useState(0)

    const setTotalAmount = () => {
        if (!cart?.length) {
            setAmount(0)
        }
        setAmount(cart.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b, 0))
    }
    useEffect(() => {
            setTotalAmount()
    }, [cart])

    return (
        <div className='container-sm default-container'>
            {authStatus ? (<>
                <div>
                    <h3>Tu carrito de compras</h3>
                    {amount ? (
                    <>
                    <div className='product-container' fluid="md">
                    <ShowProducts products={cart}/>
                    </div>
                   
                        <p>El precio total es: {amount}</p>
                        <button className='btn-main' onClick={()=>setCart([])}>Vaciar Carrito</button>
                        <div className='btn-paypal'>
                            <ButtonPaypal currency={'USD'} showSpinner={false} amount={amount}></ButtonPaypal>

                        </div>
                    </>
                    ): <p>No has agregado nada al carrito</p>}

                </div>

            </>) :
                <div>
                    <h3>Inicia sesión para añadir cosas a tu carrito</h3>
                </div>}
        </div>
    )
}

export default Checkout