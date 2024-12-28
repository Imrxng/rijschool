import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header">
      <img src="./alpha-logo.webp" alt="alpha-logo" id="logo" onClick={() => router.push("/")}/>
      <div id="nav" >
        <Link href={"/"} className={router.pathname === "/" ? "active" : ""}>Home</Link>
        <Link href={"/over-ons"} className={router.pathname === "/over-ons" ? "active" : ""}>Over ons</Link>
        <Link href={"/theorie"} className={router.pathname === "/theorie" ? "active" : ""}>Theorie</Link>
        <Link href={"/praktijk"} className={router.pathname === "/praktijk" ? "active" : ""}>Praktijk</Link>
        <Link href={"/contact"} className={router.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
      <div id="socials">
        <a href="https://www.facebook.com/alpharijschool.be" className="socialsIcons" target="_blank">
            <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/@alpha.rijschool1" className="socialsIcons" target="_blank">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/rijschoolalpha/" className="socialsIcons insta" target="_blank">
          <AiFillInstagram />
        </a>
        {isMenuOpen === false ? <GiHamburgerMenu id="hamburger" onClick={toggleMenu}/> : <></>}
      </div>
      {isMenuOpen && (
        <div id="overlay">
          <AiOutlineClose id="close" onClick={toggleMenu} />
          <div id="overlay-nav">
            <Link href={"/"} onClick={toggleMenu}>Home</Link>
            <Link href={"/over-ons"}  onClick={toggleMenu}>Over ons</Link>
            <Link href={"/theorie"} onClick={toggleMenu}>Theorie</Link>
            <Link href={"/praktijk"}  onClick={toggleMenu}>Praktijk</Link>
            <Link href={"/contact"} onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
