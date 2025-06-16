import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Cart from "../../assets/cart.png";
import Menu from "../../assets/menu.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="headerDiv">
        <div className="logo">{"SigmaMart"}</div>

        <div className="input">
          <input type="text" placeholder="Search..." />
          <span className="searchbtn ">
            <i className="fa-solid fa-magnifying-glass ml-2 cursor-pointer"></i>
          </span>
        </div>

        <NavLink to={"/cart"} className="Navlink">
          <div className="cart">
            <img className="cartImg" src={Cart} />
            Cart <p className="cartNum">0</p>
          </div>
        </NavLink>

        <div className="menu" onClick={() => setShowMenu(!showMenu)}>
          <img className="menuImg" src={Menu} />
        </div>

        <div className="Hamburger">
          <div
            className="Hamburgerbody"
            style={{ display: showMenu ? "flex" : "none" }}
          >
            <NavLink to={"/"} className="Navlink">
              <li className="li" onClick={() => setShowMenu(false)}>
                Home
              </li>
            </NavLink>

            <NavLink to={"/categories"} className="Navlink">
              <li className="li" onClick={() => setShowMenu(false)}>
                Categories
              </li>
            </NavLink>

            <NavLink to={"/cart"} className="Navlink">
              <li className="li" onClick={() => setShowMenu(false)}>
                Cart
              </li>
            </NavLink>

            <NavLink to={"/order"} className="Navlink">
              <li className="li" onClick={() => setShowMenu(false)}>
                Order
              </li>
            </NavLink>

            <NavLink to={"/about"} className="Navlink">
              <li className="li" onClick={() => setShowMenu(false)}>
                About Us
              </li>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
