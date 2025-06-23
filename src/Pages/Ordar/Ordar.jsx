import React, { useEffect, useState } from "react";
import "./Ordar.css";
import { useParams } from "react-router-dom";
import Loader from "../..//components/Loader/Loader";
function Order() {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [ordar, setordar] = useState([null]);
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
  return (
    <div id="body">
      {loading ? (
        <Loader />
      ) : (
        <div className="ordarMainDiv">
          <div className="ordarImg">
            <img src={ordar.thumbnail} alt="N/A" className="h-[80px]" />
          </div>
          <div>
            <div className="NameDiv">{ordar.title}</div>
            <div>Your order has been shipped</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
