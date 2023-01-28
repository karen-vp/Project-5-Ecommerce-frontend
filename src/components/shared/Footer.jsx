import React from 'react'
import '../../App.css';

function Footer() {
  return (
    <>
     <div className="gridfooter-container">
            <div className="griditem-1">
                <a href="">
                  {/* <img src="" alt="facebook" className="social-icons"> */}
                </a>
                <a href="">
                    {/* <img src="" alt="instagram" className="social-icons"> */}
                 </a>
                 <a href="">
                    {/* <img src="" alt="twitter" className="social-icons"> */}
                </a>
                <a href="">
                    {/* <img src="" alt="github" className="social-icons"> */}
                </a>
            </div>
            <div className="griditem-2">
                <h4 className="title-links">PRODUCTOS</h4>
                <a href="" className="footer-links">
                    Menú
                </a>
            </div>
            <div className="griditem-3">
                <h4 className="title-links">SOPORTE</h4>
                <ul className="footer-list">
                    <li><a href="" className="footer-links">Precios y cotizaciones</a> </li>
                    <li><a href="" className="footer-links">FAQ</a></li>
                    <li><a href="" className="footer-links">Guías</a></li>
                </ul>
            </div>
            <div className="griditem-4">
                <h4 className="title-links">NOSOTROS</h4>
                <ul className="footer-list">
                    <li><a href="" className="footer-links">Acerca de</a> </li>
                    <li><a href="" className="footer-links">Blog</a></li>
                    <li><a href="" className="footer-links">Trabajos</a></li>
                    <li><a href="" className="footer-links">Prensa</a></li>
                    <li><a href="" className="footer-links">Socios</a></li>
                </ul>
            </div>
            <div className="griditem-5">
                <h4 className="title-links">LEGAL</h4>
                <ul className="footer-list">
                    <li><a href="" className="footer-links">Privacidad</a> </li>
                    <li><a href="" className="footer-links">Términos y Condiciones</a></li>
                    
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