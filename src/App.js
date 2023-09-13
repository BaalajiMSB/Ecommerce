import React, { createContext, useState } from "react";
import Header from "./Layouts/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";
import Carts from "./Pages/Carts";

export const CartContext = createContext();

export default function App() {
  const [cartProduct, setCartProduct] = useState([])
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartProduct, setCartProduct }}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
