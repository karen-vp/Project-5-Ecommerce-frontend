import React from 'react'
import Header from './../shared/Header'
import Footer from './../shared/Footer'

function Layout({ children }) {
    return (
        <div className='page-container'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout