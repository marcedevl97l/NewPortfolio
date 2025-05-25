import React from "react";

function Header() {
  return (
    <header>
      <div>
        <strong>Portfolio</strong>
      </div>
      <nav>
        <a href="#id">id</a>
        <a href="#Home">Home</a>
        <a href="#Services">Services</a>
        <a href="#Portafolio">Portafolio</a>
        <a href="#Contact">Contact</a>
      </nav>
      <button className="btn">Contact Me</button>
    </header>
  );
}

export default Header;
// This is a simple header component for a portfolio website.
