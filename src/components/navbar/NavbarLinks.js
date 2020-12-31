import React from "react";
import { Link } from "react-router-dom";

function NavbarLinks({ closeMobileMenu }) {
  return (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/sign-up"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          Sign-up
        </Link>
      </li>
    </>
  );
}

export default NavbarLinks;
