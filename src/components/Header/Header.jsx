import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Cart from "../../assets/cart.png";
import Menu from "../../assets/menu.png";
import SearchImg from "../../assets/search.png";

function Header() {
  const [showMenu,setShowMenu] = useState(false);
  // const menuIcon = document.querySelector(".menu");
  // const Hamburger = document.querySelector(".Hamburgerbody");
  // const inputFild = document.querySelector(".input");

  // const menuOpen = () => {
  //   menuIcon.style.display = "none";
  //   Hamburger.style.display = "block";
  //   inputFild.style.display = "none";
  // };
  // const menuClose = () => {
  //   menuIcon.style.display = "block";
  //   Hamburger.style.display = "none";
  //   inputFild.style.display = "block";
  // };
  return (
    <header className="header">
      <div className="headerDiv">
        <div className="logo">{"SigmaMart"}</div>

        <div className="input">
          <input type="text" placeholder="Search..." />
          <button className="searchbtn">
            <img className="searchImg" src={SearchImg} />
          </button>
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

        <div className="Hamburger"  >
          <div className="Hamburgerbody"style ={{display:showMenu ? "flex":"none"}}>
            <NavLink to={"/"} className="Navlink">
              <li onClick={() => setShowMenu(false)}>Home</li>
            </NavLink>

            <NavLink to={"/categories"} className="Navlink">
              <li onClick={() => setShowMenu(false)}>Categories</li>
            </NavLink>

            <NavLink to={"/cart"} className="Navlink">
              <li onClick={() => setShowMenu(false)}>Cart</li>
            </NavLink>

            <NavLink to={"/order"} className="Navlink">
              <li onClick={() => setShowMenu(false)}>Order</li>
            </NavLink>

            <NavLink to={"/about"} className="Navlink">
              <li onClick={() => setShowMenu(false)}>About Us</li>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
