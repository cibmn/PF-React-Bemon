import React, { useState } from "react";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import TopBar from "./topBar/TopBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    console.log("Toggle cart visibility called");
    setCartVisible(!cartVisible);
  };

  console.log("Cart visible:", cartVisible);

  return (
    <div>
      <Navbar toggleCartVisibility={toggleCartVisibility} />
      <TopBar />
      {cartVisible ? <CartContainer /> : null}
      <Outlet />
      <Footer />
    </div>
  );
};