import React, { useContext } from 'react'
import { useEffect } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { CartContext } from '../../context/cartProvider';

// This values are the props in the UI

const currency = "USD";
const style = { "layout": "vertical" };


function ButtonPaypal({ currency, showSpinner, amount }) {
    const checkoutCtx = useContext(CartContext)
    const {setCart } = checkoutCtx


    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
            style={style}
            disabled={false}
            forceReRender={[amount, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                            },
                        ],
                    })
                    .then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                    });
            }}
            onApprove={function (data, actions) {
                return actions.order.capture().then(function () {
                    // Your code here after capture the order
                    setCart([])
                });
            }}
        />
    </>
    );
}

export default ButtonPaypal