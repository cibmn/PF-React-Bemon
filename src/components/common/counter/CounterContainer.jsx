import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = ({ productId }) => {
  const [stock, setStock] = useState(0);
  const [nombre, setNombre] = useState("pepe");

  useEffect(() => {
    // Obtener el producto por ID
    const product = products.find((product) => product.id === productId);
    if (product) {
      // Actualizar el estado del stock
      setStock(product.stock);
    }
  }, [productId]);

  const restar = () => {
    if (stock > 0) {
      setStock(stock - 1);
    } else {
      alert("No hay más stock disponible");
    }
  };

  const sumar = () => {
    setStock(stock + 1);
  };

  const handleNameChange = () => {
    setNombre("juan");
  };

  return (
    <CounterPresentacional
      restar={restar}
      sumar={sumar}
      contador={stock}
      setNombre={handleNameChange}
    />
  );
};
