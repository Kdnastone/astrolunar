import React from 'react'
import {Link} from "react-router-dom";
import "../../styles/header.css";


function Header() {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/mars">Mars</Link>
        <Link to="/crear">Crear</Link>
        <Link to="/listaPlanetas">Lista Planetas</Link>
        <Link to="/solar">Solar</Link>
      </nav>
    </header>
  );
};

export default Header;