import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';

function Footer() {
  return (
    <>
     <div className="gridfooter-container">
            <div className="griditem-1">
                <Link to={'/'}>
                  {/* <img src="" alt="facebook" className="social-icons"> */}
                </Link>
                <Link to={'/'}>
                    {/* <img src="" alt="instagram" className="social-icons"> */}
                 </Link>
                 <Link to={'/'}>
                    {/* <img src="" alt="twitter" className="social-icons"> */}
                </Link>
                <Link to={'/'}>
                    {/* <img src="" alt="github" className="social-icons"> */}
                </Link>
            </div>
            <div className="griditem-2">
                <h4 className="title-links">PRODUCTOS</h4>
                <Link to={'/'} className="footer-links">
                    Menú
                </Link>
            </div>
            <div className="griditem-3">
                <h4 className="title-links">SOPORTE</h4>
                <ul className="footer-list">
                    <li><Link to={'/'} className="footer-links">Precios y cotizaciones</Link> </li>
                    <li><Link to={'/'} className="footer-links">FAQ</Link></li>
                    <li><Link to={'/'} className="footer-links">Guías</Link></li>
                </ul>
            </div>
            <div className="griditem-4">
                <h4 className="title-links">NOSOTROS</h4>
                <ul className="footer-list">
                    <li><Link to={'/'} className="footer-links">Acerca de</Link> </li>
                    <li><Link to={'/'} className="footer-links">Blog</Link></li>
                    <li><Link to={'/'} className="footer-links">Trabajos</Link></li>
                    <li><Link to={'/'} className="footer-links">Prensa</Link></li>
                    <li><Link to={'/'} className="footer-links">Socios</Link></li>
                </ul>
            </div>
            <div className="griditem-5">
                <h4 className="title-links">LEGAL</h4>
                <ul className="footer-list">
                    <li><Link to={'/'} className="footer-links">Privacidad</Link> </li>
                    <li><Link to={'/'} className="footer-links">Términos y Condiciones</Link></li>
                    
                </ul>
            </div>
            <div className="griditem-6">
                <p>© 2022 Karen Valier. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</p>
            </div>
        </div>
    </>
  )
}

export default Footer