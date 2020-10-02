import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import penalty from "../../assets/penalty.png";
import logo from "../../assets/logo-penalty.png";

function Header() {
  return (
    <div id="header-nav">
      <div className="logo">
        <img src={logo} alt="Penalty" />
        <img src={penalty} alt="Penalty" />
      </div>
      <div className="form">
        <form>
          <input
            className="search"
            placeholder="ENCONTRE SEUS PRODUTOS"
            type="text"
          />
        </form>
      </div>

      <div id="nav-list">
        <ul>
          <li>ATENDIMENTO</li>
          <li>CORPORATIVO</li>
          <li>ENTRE OU CADASTRE-SE</li>
          <li>
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
