import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    function handleSticky(_) {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener("scroll", handleSticky);

    return () => removeEventListener("scroll", handleSticky);
  }, []);

  function toggleMenuFunc() {
    setOpenNav((prevNav) => !prevNav);
  }

  return (
    <nav className={`container ${sticky && "dark_nav"}`}>
      <img className="nav_logo" src={logo} alt="logo" />
      <ul className={`list_tag ${openNav && "hide_mobile_menu"}`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-140} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonals" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="menu_icon"
        onClick={toggleMenuFunc}
      />
    </nav>
  );
};

export default NavBar;
