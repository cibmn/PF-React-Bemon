// Layout.jsx
import React, { useState } from "react";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    console.log("Toggle cart visibility called"); // Verificar si se invoca correctamente
    setCartVisible(!cartVisible);
  };

  console.log("Cart visible:", cartVisible); // Verificar el estado de cartVisible

  return (
    <div>
      <Navbar toggleCartVisibility={toggleCartVisibility} />
      {cartVisible ? <CartContainer /> : <div>Error: Cart not visible</div>}
      <Outlet />
      <Footer />
    </div>
  );
};
