import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="FooterPage w-[100vw] bg-gray-800">
      <div className="footerH1">
        <h1 className=" mainH1 text-white text-4xl font-bold">SigmaMart</h1>
        <h2 className="text-white">Shop Smart, Shop Easy.</h2>
        <h2>Bringing Quality to Your Doorstap.</h2>

        <h1 className=" text-2xl font-bold">Customer service</h1>
        <NavLink to={"/cart"}>
          <p>Cart Products</p>
        </NavLink>

        <NavLink to={"/order"}>
          <p>Order Tracking</p>
        </NavLink>

        <h1 className=" text-2xl font-bold text-white">Contact Me </h1>
        <p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:nandigamwarharsh@gmail.com">
                nandigamwarharsh@gmail.com
              </a>{" "}
            </li>
            <li>
              Phone: <a href="tel:+91 7517246260">+91 7517246260</a>{" "}
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3">Follow Me On</h2>
        <div className=" icon flex space-x-4">
          <ul className="flex gap-3 text-2xl lg:text-3xl  ">
            <li className="hover:scale-110">
              <a href="https://github.com/HarshNandigamwar">
                <i className="fa-brands fa-github"></i>{" "}
              </a>{" "}
            </li>
            <li className="hover:scale-110 ">
              {" "}
              <a href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fa-brands fa-linkedin"></i>{" "}
              </a>
            </li>

            <li className="hover:scale-110">
              {" "}
              <a href="https://www.instagram.com/harsh_nandigamwar?igsh=MW8yY3VzYTY0d245YQ==">
                <i className="fa-brands fa-square-instagram"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" copyDiv text-center mt-8 border-t border-[#ff9550] pt-4">
        &#169; {new Date().getFullYear()} SigmaMart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
