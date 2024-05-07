// CounterContainer.jsx
import React, { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("¡Máximo en stock!");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No puedes tener menos de 1");
    }
  };

  const handleAdd = () => {
    onAdd(contador);
  };

  const objectProps = {
    restar,
    sumar,
    contador,
    onAdd: handleAdd,
  };

  return <CounterPresentacional {...objectProps} />;
};

export default CounterContainer;
