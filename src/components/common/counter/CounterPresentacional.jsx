
const CounterPresentacional = ({ restar, sumar, stock, setNombre }) => {
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{stock}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={setNombre}>Cambiar nombre</button>
    </div>
  );
};

export default CounterPresentacional;
