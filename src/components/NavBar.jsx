import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navInner">
        <div className="brand">
          Manajemen Buku 
        </div>
        <nav className="navLinks">
          <NavLink
            to="/"
            className={({ isActive }) => `navLink ${isActive ? "navLinkActive" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) => `navLink ${isActive ? "navLinkActive" : ""}`}
          >
            Tambah Buku
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
