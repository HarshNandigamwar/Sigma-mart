import React from "react";
import "./Categories.css";
function Categories() {
  const productCategories = [
    {
      key: 1,
      name: "Mobile Phones",
      query: "smartphones",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz-BMw0YuFoRAO-GdibhH0IXMSHTAsp5qrg&s",
    },

    {
      key: 2,
      name: "Laptops",
      query: "laptops",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQBRR3FLSHgm2_xeA-xHHjBuzg4Sl83o15A&s",
    },
    {
      key: 3,
      name: "Shirts",
      query: "mens-shirts",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3rxwb-7ShSqRBDIqvUtc3g3IVgP8Npq4dg&s",
    },

    {
      key: 4,
      name: "Tops",
      query: "tops",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zssGorE7hUyUtguwpbGA4jcWUnId2kzzqg&s",
    },
    {
      key: 5,
      name: " Watches",
      query: "mens-watches",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5t6i8FV811kmnmPI6_ynSI03stc4r1QK4Uw&s",
    },

    {
      key: 6,
      name: "Women's Shoes",
      query: "womens-shoes",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0YJKfhxISSNf20EREkud5j5AgrCKVd9KMg&s",
    },
    {
      key: 7,
      name: "Skin Care",
      query: "skin-care",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVh1RpLm3d5eTupBsis-_s2vobi_c9pyI1w&s",
    },

    {
      key: 8,
      name: "Furniture",
      query: "furniture",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4v724bT3GOIEmH4O5kJMyveIWqE96EhOjw&s",
    },
    {
      key: 9,
      name: "Sunglasses",
      query: "sunglasses",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7osuNJoP5cswSAfKEX0iiq_fFermh4GnIXw&s",
    },
    {
      key: 10,
      name: "Beauty",
      query: "beauty",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYpARhLrF-b7hD7Cn2aueGKDya0PRTso9wQ&s",
    },
  ];

  return (
    <>
      <div
        className=" categoriesPage mt-15  flex flex-col items-center gap-5 lg:gap-10 px-5 pb-20
             bg-[#dadada] text-black"
      >
        <div className="headingDiv">
          <h1 className=" categoriesH1 font-bold text-4xl p-3 md:text-5xl lg:text-6xl ">
            Categories
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 items-center gap-5 xl:gap-10">
          {productCategories.map((data) => (
            <div
              className=" categoriesCard cards h-auto w-[30vw] md:w-[20vw] border-2 border-gray-400  cursor-pointer xl:w-55 flex flex-col items-center gap-3 xl:gap-4 rounded-xl 
                          bg-amber-600 text-black "
              onClick={() => getProductsByCategory(data.query)}
              key={data.key}
            >
              <div className="bg-[#ff9550] w-full flex items-center justify-center h-[100px] rounded-2xl ">
                <img
                  src={data.imgUrl}
                  alt=""
                  className="h-[85px] rounded-xl "
                />
              </div>

              <h1 className="h-10 xl:h-13 font-bold text-l md:text-xl xl:text-[21px] text-white">
                {data.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
