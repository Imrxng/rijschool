import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li>Telefoon: <a href="tel:+32 486 29 53 75">+32 486 29 53 75</a></li>
              <li>Email: <a href="mailto:rijschoolalpha@gmail.com">rijschoolalpha@gmail.com</a></li>
              <li>Addres: <a href="https://www.google.com/maps/place/Alpha+Rijschool/@51.2202801,4.4592743,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3f78275834721:0x9e464b0a101b01a4!8m2!3d51.2202801!4d4.4592743!16s%2Fg%2F11c58222mp?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>Turnhoutsebaan 76B, 2100 Antwerpen, België</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Snelle Links</h3>
            <ul className="footer-list">
              <li><Link href="/over-ons">Home</Link></li>
              <li>Theorie</li>
              <li>Praktijk</li>
              <li>FAQ</li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Volg ons</h3>
            <ul className="footer-list">
              <li><a href="https://www.facebook.com/alpharijschool.be">Facebook</a></li>
              <li><a href="https://www.tiktok.com/@alpha.rijschool1">Tiktok</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Alpha Rijschool. Alle Rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;