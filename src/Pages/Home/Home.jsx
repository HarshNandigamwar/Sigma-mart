import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import ImgSlid from "../../components/ImgSlid/ImgSlid";
import ProductCard from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

function Home() {
  const [phones, setphones] = useState([]);
  const [shirts, setshirts] = useState([]);
  const [laptops, setlaptops] = useState([]);
  const [beautys, setbeautys] = useState([]);
  const [loadingone, setloadingone] = useState(true);

  // Fetching phones

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => {
        setphones(data.products);
        setloadingone(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setloadingone(false);
      });
  }, []);

  // Fetching shirt

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => {
        setshirts(data.products);
      });
  }, []);

  // Fetching laptops

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        setlaptops(data.products);
      });
  }, []);

  // Fetching beauty

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((data) => {
        setbeautys(data.products);
      });
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {loadingone ? (
        <Loader />
      ) : (
        <div className="HomePage ">
          <ImgSlid />
          <div className=" bg-yellow-50 mainBody">
            <div>
              <h1 className="productHeading text-center text-3xl font-bold">
                Premium Mobile Phones
              </h1>
              <hr />
              <div className=" w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
                {/* Display phone   */}
                {phones.map((phone) => (
                  <ProductCard
                    key={phone.id}
                    image={phone.thumbnail}
                    productTitle={phone.title}
                    price={Math.floor(phone.price * 83)}
                    discount={phone.discountPercentage}
                    onClick={() => handleClick(phone.id)}
                  />
                ))}
              </div>

              <h1 className="productHeading text-center text-3xl font-bold">
                {" "}
                Trending Laptops
              </h1>
              <hr />
              <div className=" w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
                {/* Display laptops   */}
                {laptops.map((laptop) => (
                  <ProductCard
                    key={laptop.id}
                    image={laptop.thumbnail}
                    productTitle={laptop.title}
                    price={Math.floor(laptop.price * 83)}
                    discount={laptop.discountPercentage}
                    onClick={() => handleClick(laptop.id)}
                  />
                ))}
              </div>

              <h1 className="productHeading text-center text-3xl font-bold">
                {" "}
                Exclusive Shirts
              </h1>
              <hr />
              <div className=" w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
                {/* Display shirt   */}

                {shirts.map((shirt) => (
                  <ProductCard
                    key={shirt.id}
                    image={shirt.thumbnail}
                    productTitle={shirt.title}
                    price={Math.floor(shirt.price * 83)}
                    discount={shirt.discountPercentage}
                    onClick={() => handleClick(shirt.id)}
                  />
                ))}
              </div>

              <h1 className="productHeading text-center text-3xl font-bold">
                {" "}
                Beauty Products
              </h1>
              <hr />
              <div className=" w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
                {/* Display beauty   */}

                {beautys.map((beauty) => (
                  <ProductCard
                    key={beauty.id}
                    image={beauty.thumbnail}
                    productTitle={beauty.title}
                    price={Math.floor(beauty.price * 83)}
                    discount={beauty.discountPercentage}
                    onClick={() => handleClick(beauty.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
