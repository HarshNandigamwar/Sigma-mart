import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Card() {
  return (
    <card>
      <NavLink to="/">
        <div>
          <h2>cart</h2>
        </div>
      </NavLink>
    </card>
  );
}

export default Card;
