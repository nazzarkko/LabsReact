import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import Basket from "../basket.png";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <h1>Ukrainian aviation</h1>
      <ul>
        <li>
          <Link to="">HOME</Link>
        </li>
        <li>
          <Link to="/catalog">CATALOG</Link>
        </li>
        <li>
          <Link to="/cart">
            <img className="basket_icon" src={Basket} alt="Basket" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
