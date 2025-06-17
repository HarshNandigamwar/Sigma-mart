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
        <div className="logo font-bold text-2xl  ">SigmaMart</div>

        <div className="inputDiv flex items-center gap-5 mr-5 lg:gap-15">
          <li className="inputbg flex bg-amber-600 text-black items-center w-[46vw] md:w-[45vw] xl:w-[43vw] sm:w-[20vw] rounded-[6px]">
            <input
              className="input flex bg-white w-[40vw] h-9 rounded-l-[6px] px-2 text-[18px] lg:text-xl"
              type="text"
              placeholder="Search..."
            />

            <i className="fa-solid fa-magnifying-glass btn ml-2 text-xl cursor-pointer "></i>
          </li>
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
