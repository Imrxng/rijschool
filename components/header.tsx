import Link from "next/link";
import React from "react";
import "@/styles/header.component.css";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <div id="header">
      <img src="./alpha-logo.png" alt="alpha-logo" id="logo"/>
      <div id="nav">
        <Link href={"/"}>Home</Link>
        <Link href={"/over-ons"}>Over ons</Link>
        <Link href={"/theorie"}>Theorie</Link>
        <Link href={"/praktijk"}>Praktijk</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div id="socials">
        <a href="https://www.facebook.com/alpharijschool.be" className="socialsIcons" target="_blank">
            <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/@alpha.rijschool1" className="socialsIcons" target="_blank">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Header;
