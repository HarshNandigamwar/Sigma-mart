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
        {/* Smartphone card */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-5 xl:gap-10">
          <div
            className=" categoriesCard cards h-auto w-[40vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl bg-amber-600 text-black "
            onClick={() => CategorieClick("smartphones")}
          >
            <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz-BMw0YuFoRAO-GdibhH0IXMSHTAsp5qrg&s"
                className="h-[85px] rounded-xl "
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQBRR3FLSHgm2_xeA-xHHjBuzg4Sl83o15A&s"
                className="h-[85px] rounded-xl "
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
                src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3rxwb-7ShSqRBDIqvUtc3g3IVgP8Npq4dg&s "
                className="h-[85px] rounded-xl "
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
                src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zssGorE7hUyUtguwpbGA4jcWUnId2kzzqg&s "
                className="h-[85px] rounded-xl "
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
                src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5t6i8FV811kmnmPI6_ynSI03stc4r1QK4Uw&s "
                className="h-[85px] rounded-xl "
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
                src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0YJKfhxISSNf20EREkud5j5AgrCKVd9KMg&s "
                className="h-[85px] rounded-xl "
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
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVh1RpLm3d5eTupBsis-_s2vobi_c9pyI1w&s  "
                className="h-[85px] rounded-xl "
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
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4v724bT3GOIEmH4O5kJMyveIWqE96EhOjw&s  "
                className="h-[85px] rounded-xl "
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
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7osuNJoP5cswSAfKEX0iiq_fFermh4GnIXw&s  "
                className="h-[85px] rounded-xl "
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
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYpARhLrF-b7hD7Cn2aueGKDya0PRTso9wQ&s  "
                className="h-[85px] rounded-xl "
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
