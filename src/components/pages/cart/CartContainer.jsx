// CartContainer.jsx
import React, { useState } from "react";
import Cart from "./Cart";

const CartContainer = () => {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const cuponDescuento = "GOKULAM108"; // cupón de descuento

  // Función para agregar productos al carrito
  const agregarProducto = (producto) => {
    setProductosAgregados([...productosAgregados, producto]);
  };

  console.log("Productos agregados:", productosAgregados); // Verificar si los productos se están pasando correctamente

  return <Cart productosAgregados={productosAgregados} />;
};

export default CartContainer;
