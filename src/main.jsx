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
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About />} />
      <Route path="categories" element={<Categories />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<Order />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
