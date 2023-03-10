import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/globalContext'
import { UserProvider } from './context/userContext'
import { CartProvider } from './context/cartProvider'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <UserProvider>
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <PayPalScriptProvider option={{ 'client-id': process.env.PAYPAL_CLIENT_ID }}>

              <App />

            </PayPalScriptProvider>
          </BrowserRouter>
        </CartProvider>
      </AppProvider>
    </UserProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
