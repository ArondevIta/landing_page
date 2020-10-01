import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import penalty from "../../assets/penalty.png";
import logo from "../../assets/logo-penalty.png";

function Header() {
  return (
    <div id="header-nav">
      <img id="logo" src={logo} alt="Penalty" />
      <img id="logo-penalty" src={penalty} alt="Penalty" />
      <form>
        <input id="seach" placeholder="ENCONTRE SEUS PRODUTOS" type="text" />
      </form>

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
