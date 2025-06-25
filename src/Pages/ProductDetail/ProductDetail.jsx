import React, { useContext, useEffect, useState } from "react";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { CartContext } from "../Cart/CartContext";
const ProductDetail = () => {
  const [info, setinfo] = useState([null]);
  const [loading, setloading] = useState(true);
  const [mainImg, setmainImg] = useState(null);
  const { id } = useParams();

  //  Display data using API
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data);
        setloading(false);
      }) // Catching error
      .catch((err) => {
        console.error("Error fetching product:", err);
        setloading(false);
      });
  }, []);

  // Changing a background color based on Rating
  const bgColor =
    info.rating >= 4.5
      ? "bg-green-500"
      : info.rating >= 3
      ? "bg-yellow-300"
      : "bg-red-600";

  // Going to the top of the page using this function after 1 second.
  function Mypage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }),
      [];
  }
  // Calling Mypage function after 1 second.
  setTimeout(() => {
    Mypage();
  }, 1000);
  //  change  thumbnail
  function ImgOne() {
    setmainImg(info.images[0]);
  }
  function Imgtwo() {
    setmainImg(info.images[1]);
  }
  function Imgthree() {
    setmainImg(info.images[2]);
  }

  const navigate = useNavigate();
  function orderpage(id) {
    navigate(`/ordarpage/${id}`);
  }

  const { addToCart } = useContext(CartContext);
  const { message, clearMessage } = useContext(CartContext);
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  return (
    <>
      {/* Display Loader */}
      {loading ? (
        <Loader />
      ) : (
        <div className="ProductDetailBody">
          <div className="flex flex-col items-center">
            <div className="mainDiv bg-[#ff9550] w-[80%] h-[400px] flex flex-col items-center justify-center rounded-2xl ">
              <div className=" mainImg h-[160px] w-[300px] rounded-2xl flex justify-center    bg-yellow-300">
                {/* Display product thumbnail */}
                <img
                  src={mainImg ? mainImg : info.thumbnail}
                  className="h-[150px]"
                  alt="N/A"
                  loading="lazy"
                />
              </div>
              <div className=" container w-[400px] h-[150px] flex justify-between lg:gap-[10px]  ">
                {/* Display product images */}
                <div className="item bg-yellow-300  rounded-xl h-[100px] w-[100px] gap-1">
                  <img
                    src={info.images[0]}
                    alt="N/A"
                    loading="lazy"
                    onClick={ImgOne}
                  />
                </div>

                <div className="item bg-yellow-300 rounded-xl h-[100px] w-[100px] gap-1">
                  <img
                    src={info.images[1]}
                    alt="N/A"
                    loading="lazy"
                    onClick={Imgtwo}
                  />
                </div>
                <div className="item bg-yellow-300 rounded-xl h-[100px] w-[100px] gap-1">
                  <img
                    src={info.images[2]}
                    alt="N/A"
                    loading="lazy"
                    onClick={Imgthree}
                  />
                </div>
              </div>
            </div>

            <div className="information">
              {/* Display title */}
              <h2 className=" name font-bold text-2xl">{info.title}</h2>
              {/* Display information about Products */}
              <p>{info.description}</p>

              <div
                className={` ${bgColor} w-[70px] flex justify-center items-center rounded-[8px]`}
              >
                {/* Display rating of product */}
                {info.rating}⭐
              </div>

              <div className="flex">
                <p>Discount</p> {/* Display discount of product */}
                <p className="text-green-400">{info.discountPercentage} %off</p>
              </div>
              <div className="price text-2xl font-bold">
                {/* Display price of the product */}₹{" "}
                {Math.floor(info.price * 83)}{" "}
              </div>
            </div>

            <div className="messageDiv bg-yellow-50">{message}</div>
            <div className="flex justify-center w-[500px]">
              <button
                className="Bone  bg-yellow-500 rounded-md  flex items-center justify-center h-[35px] w-[100px] text-[13px] font-bold"
                onClick={() => addToCart(info.id)}
              >
                Add to Cart
              </button>

              <button
                className="Buttons bg-yellow-500 rounded-md  flex items-center justify-center h-[35px] w-[100px] text-[13px] font-bold"
                onClick={() => orderpage(info.id)}
              >
                Buy now
              </button>
            </div>
          </div>

          <div className="DetailInfo flex flex-col items-center justify-center">
            <div className=" rounded-2xl ">
              <div className="flex bg-[#ff9550] rounded-t-xl">
                {/* Display category  */}
                <p className="font-bold">Category </p> <p> {info.category} </p>
              </div>

              <div className="flex bg-amber-600">
                {/* Display brand */}
                <p className="font-bold">Brand </p> <p>{info.brand}</p>
              </div>

              <div className="flex bg-[#ff9550] ">
                <p className="font-bold">Return Policy </p>{" "}
                {/* Display returnPolicy */}
                <p>{info.returnPolicy} </p>
              </div>

              <div className="flex bg-amber-600 ">
                <p className="font-bold">Shipping </p>{" "}
                {/* Display shipping time */}
                <p> {info.shippingInformation}</p>
              </div>

              <div className="flex bg-[#ff9550] ">
                <p className="font-bold">Stock </p>{" "}
                <p>
                  {/* Display available stock */}
                  {info.stock > 1
                    ? ` ${info.stock} item Available`
                    : "Not available"}{" "}
                </p>
              </div>

              <div className="flex bg-amber-600">
                <p className="font-bold">Warranty </p> {/* Display warranty */}
                <p>{info.warrantyInformation} </p>
              </div>

              <div className="flex bg-[#ff9550]  rounded-b-2xl">
                <p className="font-bold">Weight </p>{" "}
                {/* Display weight of the product */}
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
