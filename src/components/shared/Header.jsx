import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import {useState} from 'react'
import logo from './../../assets/logo.png'
import shopcart from './../../assets/shopping-cart.png'

function Header() {
    const [open, setOpen] = useState(false)
  return (
    <>
      <header>
        <nav className='nav-menu'>
          <Link to='/'><img src={logo} alt="logo" id='logo' /></Link>
          <ul className='ul-list'>
            <li>
              <Link to='catalog' className='link-item'>Productos</Link>
            </li>
            <li>
              <Link to='login' className='link-item'>Login</Link>
            </li>
            <li>
              <Link to='register' className='link-item btn-border'>Sign up</Link>
            </li>
            <li>
                <Link to='checkout'><img src={shopcart} alt="chcar" id='checkoutcar' className='icons'/></Link>
            </li>
          </ul>
                     
                     
        </nav>
      </header>
    </>
  )
}

export default Header