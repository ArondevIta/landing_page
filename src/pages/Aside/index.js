import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import max1000 from "../../assets/max1000.png";
import ecoknit from "../../assets/ecoknit.png";
import ellipseGreen from "../../assets/ellipse-green.png";
import ellipseBlack from "../../assets/ellipse-black.png";
import maxMini from "../../assets/max-mini.png";

function Aside() {
  return (
    <aside className="main">
      <p className="title">BOLA DE FUTSAL MAX 1000</p>
      <p className="content">
        A Penalty apresenta a bola oficial do Campeonato Paulista de 2020, ela
        que supera o modelo anterior nos quesitos maciez, precisão, velocidade e
        controle. A bola ainda possui 14 gomos e vem com superfície texturizada
        que auxilia na aerodinâmica. Adquira já!
      </p>
      <button className="btn-products">Ver produtos</button>
      <div className="slide-left">
        <FaChevronLeft
          style={{
            color: "#55D840",
            marginTop: 20,
            marginLeft: 22,
            height: 20,
          }}
        />
      </div>
      <img className="max1000-img" src={max1000} alt="Max 100" />
      <img className="ecoknit-img" src={ecoknit} alt="Ecoknit" />

      <div className="list-circles">
        <ul>
          <li>
            <img src={ellipseBlack} alt="" />
          </li>
          <li>
            <img src={ellipseGreen} alt="" />
          </li>
          <li>
            <img src={ellipseBlack} alt="" />
          </li>
          <li>
            <img src={ellipseBlack} alt="" />
          </li>
        </ul>
      </div>
      <div className="list-items">
        <ul>
          <li>
            <img
              style={{ position: "absolute", left: 782 }}
              src={maxMini}
              alt=""
            />
          </li>
          <li>
            <img
              style={{ position: "absolute", left: 827 }}
              src={maxMini}
              alt=""
            />
          </li>
          <li>
            <img
              style={{ position: "absolute", left: 872 }}
              src={maxMini}
              alt=""
            />
          </li>
          <li>
            <img
              style={{ position: "absolute", left: 917 }}
              src={maxMini}
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className="slide-right">
        <FaChevronRight
          style={{
            color: "#55D840",
            marginTop: 20,
            marginLeft: 22,
            height: 20,
          }}
        />
      </div>
    </aside>
  );
}

export default Aside;
