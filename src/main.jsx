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
import Ordar from "./Pages/Ordar/Ordar.jsx";
import Home from "./Pages/Home/Home.jsx";
import OrdarPage from "./Pages/OrdarPage/OrdarPage.jsx";
import CategoriesDetail from "./Pages/CategoriesDetail/CategoriesDetail.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import { CartProvider } from "./Pages/Cart/CartContext.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="categories" element={<Categories />} />
      <Route path="cart" element={<Cart />} />
      <Route path="ordarpage/:id" element={<OrdarPage />} />
      <Route
        path="categoriesDetail/:categorie"
        element={<CategoriesDetail />}
      />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="ordar" element={<Ordar />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
