import React from "react";

const CounterPresentacional = ({ restar, sumar, contador }) => {
  return (
    <div>
      <button onClick={restar}>-</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default CounterPresentacional;
