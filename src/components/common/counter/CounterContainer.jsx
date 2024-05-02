import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = ({ stock, initial = 0, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [errorMessage, setErrorMessage] = useState("");

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Lo sentimos, no alcanzamos a cubrir esa cantidad.");
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Debes tener al menos 1 producto seleccionado");
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd,
    errorMessage,
  };

  return <CounterPresentacional {...objectProps} />;
};
