import React from "react";
import "./Categories.css";
import { NavLink, useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  // Forward to categoriesdetail with categorie data.
  const CategorieClick = (categorie) => {
    navigate(`/categoriesDetail/${categorie}`);
  };
  return (
    <div>
      <div
        className=" categoriesPage mt-15  flex flex-col items-center gap-5 lg:gap-10 px-5 pb-20
              text-black"
      >
        <div className="headingDiv">
          <h1 className=" categoriesH1 font-bold text-4xl p-3 md:text-5xl lg:text-6xl ">
            Categories
          </h1>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-5 xl:gap-10">
          
            {/* Smartphone card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("smartphones")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oXgefqCBBYEo2mVX1wamL6vihMCA7Echsg&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              Mobile Phones
            </h1>
          </div>

          {/* Laptops card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("laptops")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnygfCfIcGZlkA0LQ12dKJuxvN6KhA3GqADvtk_Q-5DA&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              Laptops
            </h1>
          </div>

          {/* Shirts card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("mens-shirts")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQde42ALoiRVeyGGoEsSxGyCl0pOuYVNXtV1tzAlq8NMsjzkDqnfteT87sJ&s=10"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Shirts
            </h1>
          </div>

          {/* Tops card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("tops")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt64eiM-HBfUReB_zg4gkzpsTy5CEFv2moZwtd7YedIQ&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Tops
            </h1>
          </div>

          {/* Watch card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("mens-watches")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw9_XdHCZJk7AQDPYEp3eHFLZysNnY1rZyMbcYcBfLw&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Watches
            </h1>
          </div>

          {/* Shoes card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("womens-shoes")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbG3DN-u_-VIpCtuuUWa0DcqWLJvRS0GQnxsRFZyIetw&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Women's Shoes
            </h1>
          </div>

          {/* SkinCare card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("skin-care")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAR_6BGJNaqt-WvPqFdeOmhkBKTwrTBeDBDI1yfcAuA&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Skin Care
            </h1>
          </div>

          {/* Furniture card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("furniture")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSdZ3C2-HjEm3k-VHwschA1PVhWcXjpZ0wRjlCD0-RQ&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Furniture
            </h1>
          </div>

          {/* Sunglasses card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("sunglasses")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8IK_-dvQcs4YQJTDFVfrbOJij_rGqDeyM5sQoBJxtA&s"
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Sunglasses
            </h1>
          </div>

          {/* Beauty card */}
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("beauty")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS7J3ImuoUdT4s0JZwVyFpc4NYXRmizYzIbqZUfJ2Vg&s "
                className="h-[85px] rounded-xl "
                loading="lazy"
              />
            </div>
            <h1 className="Font h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
              {" "}
              Beauty
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
