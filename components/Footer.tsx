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
              <li>Phone: <a href="tel:+32 486 29 53 75">+32 486 29 53 75</a></li>
              <li>Email: <a href="mailto:rijschoolalpha@gmail.com">rijschoolalpha@gmail.com</a></li>
              <li>Address: Antwerpen, België</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-titl">Quick Links</h3>
            <ul className="footer-list">
              <li><Link href="/over-ons">Home</Link></li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Follow Us</h3>
            <ul className="footer-list">
              <li><a href="https://www.facebook.com/alpharijschool.be">Facebook</a></li>
              <li><a href="https://www.tiktok.com/@alpha.rijschool1">Tiktok</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Alpha Rijschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;