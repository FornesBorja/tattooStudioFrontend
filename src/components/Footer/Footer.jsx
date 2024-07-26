import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <>
    <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Esperanza Fornes Borja. Todos los derechos reservados.</p>
                <ul className="social-icons">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}
