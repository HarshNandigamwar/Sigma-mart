import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <card
      className="CardPage bg-amber-600 rounded-[10px]  "
      onClick={props.onClick}
    >
      <NavLink to={"/"}>
        {/* Updating all data with the help of props */}
        <div className="flex items-center justify-center bg-[#ff9550] rounded-[10px]">
          <img src={props.image} className="h-[90%] lg:h-4=40 rounded-2xl" />
        </div>
        <div>
          <p>{props.productTitle.slice(0, 15)} </p>
          <p>
            {" "}
            {props.price} ₹{" "}
            <span className="text-lime-400"> {props.discount} %off </span>{" "}
          </p>
        </div>
      </NavLink>
    </card>
  );
}

export default Card;
