import React, { useState } from "react";
import Cart from "./Cart";

const CartContainer = () => {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const cuponDescuento = "GOKULAM108"; // cupón de descuento

  const agregarProducto = (producto) => {
    setProductosAgregados([...productosAgregados, producto]);
  };

  return <Cart productosAgregados={productosAgregados} cuponDescuento={cuponDescuento} />;
};

export default CartContainer;
