import "./Counter.css";


const CounterPresentacional = ({ restar, sumar, contador, onAdd, errorMessage }) => {
  return (
    <div>
      <button className="counter-btn" onClick={restar}>-</button>
      <span>{contador}</span>
      <button className="counter-btn" onClick={sumar}>+</button>
      {errorMessage && <span style={{ marginLeft: "10px", color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default CounterPresentacional;


/* 
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>

 */