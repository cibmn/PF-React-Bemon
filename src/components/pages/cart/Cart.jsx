
const Cart = ({ productosAgregados, cuponDescuento }) => {
  return (
    <div>
      <h1>Ya casi es tuyo!</h1>
      {productosAgregados.length > 0 ? (
        <div>
          <h2>Productos Agregados:</h2>
          <ul>
            {productosAgregados.map((producto, index) => (
              <li key={index}>{producto.nombre}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      {cuponDescuento && (
        <div>
          <h2>Cupón de Descuento:</h2>
          <p>{cuponDescuento}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
