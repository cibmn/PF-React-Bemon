import React, { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [maxStockError, setMaxStockError] = useState(false);
  const [minQuantityError, setMinQuantityError] = useState(false);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setMaxStockError(true);
      setTimeout(() => setMaxStockError(false), 3000); 
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      setMinQuantityError(true);
      setTimeout(() => setMinQuantityError(false), 3000); 
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

  return (
    <div>
      <CounterPresentacional {...objectProps} />
      {minQuantityError && <p className="error-message">La cantidad mínima requerida es 1 cantidad</p>}
      {maxStockError && <p className="error-message">Este es nuestro límite de stock disponible </p>}
    </div>
  );
};

export default CounterContainer;
