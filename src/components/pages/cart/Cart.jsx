import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, clearCart, deleteById, total, itemFromItemDetail }) => {
  const clearCartAlert = () => {
    const result = window.confirm("¿Estás seguro de que quieres limpiar el carrito?");
    if (result) {
      clearCart();
      alert("Carrito limpio");
    }
  };

  return (
    <div className="cart">
      <h1>¡Ya casi es tuyo!</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <button onClick={() => deleteById(product.id)}>Eliminar</button>
        </div>
      ))}

      {itemFromItemDetail && (
        <div key={itemFromItemDetail.id} style={{ border: "2px solid black" }}>
          <h4>{itemFromItemDetail.title}</h4>
          <h5>{itemFromItemDetail.price}</h5>
          <h5>{itemFromItemDetail.quantity}</h5>
          <button onClick={() => deleteById(itemFromItemDetail.id)}>Eliminar</button>
        </div>
      )}

      <h2>Total: {total}</h2>
      <p>Tienes cupón de descuento? Agrégalo acá:</p>

      <Button onClick={clearCartAlert} variant="outlined">
        Limpiar carrito
      </Button>

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
