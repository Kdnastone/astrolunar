import React from 'react'
import {Link} from "react-router-dom";
import "../../styles/header.css";


function Header() {
  return (<nav>
    <Link to="/home">Información</Link>
    <Link to="/acerca">Acerca de</Link>
    <Link to="/mars">Fotos de Marte</Link>
    <Link to="/crear">Añadir Planeta</Link>
    <Link to="/ListaPlanetas">Planetas</Link>
    <Link to="/Solar">Sistema Solar</Link>
  </nav>
  )
}

export default Header