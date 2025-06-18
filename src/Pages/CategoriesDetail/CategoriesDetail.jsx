import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoriesDetail.css";
import ProductCard from "../../components/Card/Card";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";

const BeautyDetail = () => {
  const [loadingone, setloadingone] = useState(true);
  const { categorie } = useParams();
  const [details, setdetails] = useState([]);

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
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {loadingone ? (
        <Loader />
      ) : (
        <div id="body">
          <div className=" bg-yellow-50 mainBody">
            <div className=" w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
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
