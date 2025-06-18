import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const ProductDetail = () => {
  const [info, setinfo] = useState([null]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data);
        setloading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setloading(false);
      });
  }, []);

  const bgColor =
    info.rating >= 4.5
      ? "bg-green-500"
      : info.rating >= 3
      ? "bg-yellow-300"
      : "bg-red-600";

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="ProductDetailBody">
          <div className="flex flex-col items-center">
            <div className="mainDiv bg-[#ff9550] w-[80%] h-[400px] flex flex-col items-center justify-center rounded-2xl ">
              <div className=" mainImg h-[160px] w-[300px] rounded-2xl flex justify-center    bg-yellow-300">
                <img
                  src={info.thumbnail}
                  className="h-[150px]"
                  alt="N/A"
                  loading="lazy"
                />
              </div>
              <div className=" container w-[400px] h-[150px] flex justify-between  ">
                <div className="item bg-yellow-300  rounded-xl h-[100px] w-[100px] gap-1">
                  <img src={info.images[0]} alt="N/A" loading="lazy" />
                </div>
                <div className="item bg-yellow-300 rounded-xl h-[100px] w-[100px] gap-1">
                  <img src={info.images[2]} alt="N/A" loading="lazy" />
                </div>
                <div className="item bg-yellow-300 rounded-xl h-[100px] w-[100px] gap-1">
                  <img src={info.images[1]} alt="N/A" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="information">
              <h2 className=" name font-bold text-2xl">{info.title}</h2>
              <p>{info.description}</p>

              <div
                className={` ${bgColor} w-[70px] flex justify-center items-center rounded-[8px]`}
              >
                {info.rating}⭐
              </div>

              <div className="flex">
                <p>Discount</p>{" "}
                <p className="text-green-400">{info.discountPercentage} %off</p>
              </div>
              <div className="price text-2xl font-bold">
                ₹ {Math.floor(info.price * 83)}{" "}
              </div>
            </div>

            <div className="flex justify-center w-[500px]">
              <button className="Bone bg-yellow-500 rounded-md  flex items-center justify-center h-[35px] w-[100px] text-[13px] font-bold">
                Buy now
              </button>

              <button className="Buttons bg-yellow-500 rounded-md  flex items-center justify-center h-[35px] w-[100px] text-[13px] font-bold">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="DetailInfo">
            <div className=" rounded-2xl ">
              <div className="flex bg-[#ff9550] rounded-t-xl">
                <p className="font-bold">Category </p> <p> {info.category} </p>
              </div>

              <div className="flex bg-amber-600">
                <p className="font-bold">Brand </p> <p>{info.brand}</p>
              </div>

              <div className="flex bg-[#ff9550] ">
                <p className="font-bold">Return Policy </p>{" "}
                <p>{info.returnPolicy} </p>
              </div>

              <div className="flex bg-amber-600 ">
                <p className="font-bold">Shipping </p>{" "}
                <p> {info.shippingInformation}</p>
              </div>

              <div className="flex bg-[#ff9550] ">
                <p className="font-bold">Stock </p>{" "}
                <p>
                  {info.stock > 1
                    ? ` ${info.stock} item Available`
                    : "Not available"}{" "}
                </p>
              </div>

              <div className="flex bg-amber-600">
                <p className="font-bold">Warrenty </p>{" "}
                <p>{info.warrantyInformation} </p>
              </div>

              <div className="flex bg-[#ff9550]  rounded-b-2xl">
                <p className="font-bold">Weight </p>{" "}
                <p>{info.weight * 28} g </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
