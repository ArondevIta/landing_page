import React from "react";
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import "./style.css";
import max1000 from "../../assets/max1000.png";
import ecoknit from "../../assets/ecoknit.png";
import ellipseGreen from "../../assets/ellipse-green.png";
import ellipseBlack from "../../assets/ellipse-black.png";
import maxMini from "../../assets/max-mini.png";

function Aside() {
  return (
    <div className="container">
      <div className="teste1">
        <h2 className="title">BOLA DE FUTSAL MAX 1000</h2>
        <p className="text">
          A Penalty apresenta a bola oficial do Campeonato Paulista de 2020, ela
          que supera o modelo anterior nos quesitos maciez, precisão, velocidade
          e controle.
        </p>
        <div>
          <input id="btn-products" type="submit" value="VER PRODUTOS" />
        </div>
      </div>

      <div className="teste2">
        <div>
          <div className="icones">
            <FaChevronLeft className="icon" />
          </div>
          <img className="max-img" src={max1000} alt="" />
          <div className="icones">
            <FaChevronRight className="icon" />
          </div>
        </div>

        <div className="max-list">
          <ul>
            <li>
              <img className="max-mini" src={maxMini} alt="" />
            </li>
            <li>
              <img className="max-mini" src={maxMini} alt="" />
            </li>
            <li>
              <img className="max-mini" src={maxMini} alt="" />
            </li>
            <li>
              <img className="max-mini" src={maxMini} alt="" />
            </li>
          </ul>
        </div>
        <p id="text-color">Cores disponiveis</p>
        <h3>Visualizar em 360</h3>
        <p id="text-vision">
          Tenha uma visão completa da bola MX1000, <a href="#">clique aqui.</a>
        </p>
        <div>
          <input id="btn-add-car" type="submit" value="Adicionar ao carrinho" />
        </div>
      </div>
    </div>
  );
}

export default Aside;
