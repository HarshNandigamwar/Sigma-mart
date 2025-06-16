import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import About from "./Pages/About/About.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Order from "./Pages/Order/Order.jsx";
import Home from "./Pages/Home/Home.jsx";
import Phone from "./Pages/CategoriesDetail/PhoneDetail.jsx";
import Laptop from "./Pages/CategoriesDetail/LaptopsDetail.jsx";
import Watch from "./Pages/CategoriesDetail/WatchDetail.jsx";
import Beauty from "./Pages/CategoriesDetail/BeautyDetail.jsx";
import Furniture from "./Pages/CategoriesDetail/FurnitureDetail.jsx";
import Shirts from "./Pages/CategoriesDetail/ShirtsDetail.jsx";
import Shoes from "./Pages/CategoriesDetail/ShoesDetail.jsx";
import Skincare from "./Pages/CategoriesDetail/SkincareDetail.jsx";
import Sunglass from "./Pages/CategoriesDetail/SunglassDetail.jsx";
import Tops from "./Pages/CategoriesDetail/TopsDetail.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="categories" element={<Categories />} />
      <Route path="cart" element={<Cart />} />
      <Route path="phonedetail" element={<Phone />} />
      <Route path="topsdetail" element={<Tops />} />
      <Route path="shirtsdetail" element={<Shirts />} />
      <Route path="shoesdetail" element={<Shoes />} />
      <Route path="skincaredetail" element={<Skincare />} />
      <Route path="sunglassdetail" element={<Sunglass />} />
      <Route path="laptopdetail" element={<Laptop />} />
      <Route path="watchdetail" element={<Watch />} />
      <Route path="beautybedetail" element={<Beauty />} />
      <Route path="furnituredetail" element={<Furniture />} />

      <Route path="order" element={<Order />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
