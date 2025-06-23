import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoriesDetail.css";
import ProductCard from "../../components/Card/Card";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";

const BeautyDetail = () => {
  const [loadingone, setloadingone] = useState(true);
  const { categorie } = useParams();
  const [details, setdetails] = useState([]);
  const [notfound, setnotfound] = useState(false);
  let [showMenu, setshowMenu] = useState(true);
  // Getting data from API with categorie
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categorie}`)
      .then((res) => res.json())
      .then((data) => {
        setdetails(data.products);
        setloadingone(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setnotfound(true);
      });
  }, []);

  const navigate = useNavigate();
  // Forward to product page with ID
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (notfound == true) {
    setshowMenu = true;
  }

  return (
    <>
      {/* Display Loader */}
      {loadingone ? (
        <Loader />
      ) : (
        <div id="body">
          <div
            style={{ display: showMenu ? "flex" : "none" }}
            className="notFoundDiv"
          >
            <NotFound />
          </div>
          <div
            style={{ display: showMenu ? "none" : "flex" }}
            className=" bg-yellow-50 mainBody"
          >
            <div className=" w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
              {/* Display product using loop */}
              {details.map((categoriedetail) => (
                <ProductCard
                  key={categoriedetail.id}
                  image={categoriedetail.thumbnail}
                  productTitle={categoriedetail.title}
                  price={Math.floor(categoriedetail.price * 83)}
                  discount={categoriedetail.discountPercentage}
                  onClick={() => handleClick(categoriedetail.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeautyDetail;
