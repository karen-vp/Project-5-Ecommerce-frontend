import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import logo from './../../assets/logo.png'
import shopcart from './../../assets/shopping-cart.png'
import { UserContext } from './../../context/userContext'

function Header() {
  const ctx = useContext(UserContext)
  const { logout, authStatus } = ctx
  return (
    <>
      <header>
        <nav className='nav-menu'>
          <Link to='/'><img src={logo} alt="logo" id='logo' /></Link>
            <div className='nav-row'>
              <Link to='/catalog' className='link-item'>Productos</Link>
              {authStatus ? (
                <>
                  <Link to='/profile' className='link-item'>Profile</Link>
                  <Link to='/' onClick={logout} className='link-item'>Cerrar sesión</Link>
                </>
              ) : (
                <>
                  <Link to='/login' className='link-item'>Login</Link>
                  <Link to='/register' className='link-item btn-border'>Sign up</Link>
                </>
              )}
              <Link to='/checkout'><img src={shopcart} alt="chcar" id='checkoutcar' className='icons' /></Link>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header