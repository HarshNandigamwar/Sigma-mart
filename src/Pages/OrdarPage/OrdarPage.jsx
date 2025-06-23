import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./OrdarPage.css";
import Loader from "../../components/Loader/Loader";
const OrdarPage = () => {
  const [loading, setloading] = useState(true);
  const [ordar, setordar] = useState([null]);
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  let itemPrice;
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setordar(data);
        setloading(false);
      }) // Catching error
      .catch((err) => {
        console.error("Error fetching product:", err);
        setloading(false);
      });
  }, []);

  const handleChange = (e) => {
    const qty = parseInt(e.target.value);
    setquantity(qty);
  };
  itemPrice = Math.floor(ordar.price * 83);
  const totalPrice = itemPrice * quantity;

  function Place() {
    for (let i = 0; i < 20; i++) {
      confetti();
    }
    setTimeout(() => {
      navigate(`/ordar/${id}`);
    }, 1000);
  }

  return (
    <div>
      {/* Display Loader */}
      {loading ? (
        <Loader />
      ) : (
        <div className="mainDiv p-[20px] flex flex-col items-center ">
          <div className="mainimgDiv">
            <img src={ordar.thumbnail} alt="N/A" className="h-[200px]" />
          </div>

          <h3 className="text-2xl title">{ordar.title}</h3>

          <form action="" className="bg-amber-600 form">
            <input type="text" placeholder="Name" className="name1" />

            <textarea
              name="address"
              rows={4}
              placeholder="Enter full address"
              className="name1"
            ></textarea>

            <input
              type="number"
              name="Quantity"
              className="name1"
              value={quantity}
              onChange={handleChange}
            />

            <select name="payment" className="name1 op">
              <option value="cash-on-delivery">Cash on Delivery</option>
              <option value="credit-card">Credit Card</option>
              <option value="upi">UPI</option>
            </select>
          </form>

          <div className="bg-amber-600 price"> {totalPrice} </div>

          <button className="Placebtn" onClick={Place}>
            Place Ordar
          </button>
        </div>
      )}
    </div>
  );
};

export default OrdarPage;
