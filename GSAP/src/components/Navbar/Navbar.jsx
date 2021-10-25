import React from "react";

import "../../styles/styles.scss"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">ERCO</div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#blue">Experiencia ERCO</a>
          </li>
          <li>
            <a href="/sistemaSolar">Tu Sistema Solar</a>
          </li>
          <li>
            <a href="/tecnologia">Tecnología</a>
          </li>
          <li>
            <a href="/costoInversion">Costo de inversión</a>
          </li>
          <li>
            <a href="/retornoInversion">Retorno de inversión</a>
          </li>
          <li>
            <a href="/medioAmbiente">Medio ambiente</a>
          </li>
          <li>
            <a href="/firmar">Firmar</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
