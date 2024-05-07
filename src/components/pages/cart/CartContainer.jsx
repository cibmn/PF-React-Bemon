import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  const total = getTotalPrice(); // Calcula el total

  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteById={deleteById}
      total={total}
    />
  );
};

export default CartContainer;
