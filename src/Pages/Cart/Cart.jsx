import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="cartDiv flex flex-col items-center">
      <h1 className=" cartHeading text-3xl font-bold text-center ">
        Cart Page
      </h1>
      {cart.length === 0 ? (
        <p>No items in cart. 🙃</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className=" liDiv flex gap-1">
              <div className="itemDiv bg-amber-600 flex ">
                <div className=" imgDiv h-[140px] w-[230px] rounded-2xl bg-[#ff9550]">
                  <img
                    src={item.thumbnail}
                    alt="N/A"
                    className="Image h-[90px]"
                  />
                </div>
                <div>
                  <p className="title font-bold">{item.title}</p>

                  <p className=" disc text-[11px] ">{item.description}</p>

                  <div className="flex gap-6 items-center">
                    <p>₹{Math.floor(item.price * 83)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className=" bg-green-500 text-white rounded  h-[30px] w-[70px] border        "
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className=" bg-red-500 text-white rounded h-[30px] w-[70px] border "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
