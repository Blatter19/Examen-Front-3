import React from 'react'
import { Link } from "react-router-dom";
import { useDentistContext } from "./utils/global.context";
import '../index.css';

const Navbar = () => {
  const {dispatch} = useDentistContext();
  return (
    <nav>
      <Link to = "/home">
        <h4>Home</h4>
      </Link>
      <Link to = "/contacto">
        <h4>Contacto</h4>
      </Link>
      <Link to = "/favs">
        <h4>Destacados</h4>
      </Link>
      <button onClick={() => dispatch({type: "CHANGE_THEME"})}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar