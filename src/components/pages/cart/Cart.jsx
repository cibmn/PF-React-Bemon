import { useContext, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
    setOpen(false);
  };

  const handleClearCartConfirmation = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1>Este es el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <button onClick={() => deleteById(product.id)}>Eliminar</button>
        </div>
      ))}
      <h2>El total a pagar es {getTotalPrice()}</h2>

      <Button onClick={handleClearCartConfirmation} variant="outlined">
        Limpiar carrito
      </Button>

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>¿Seguro quieres limpiar el carrito?</DialogTitle>
        <DialogContent>
          <DialogContentText>Esta acción limpiará todos los productos del carrito. ¿Estás seguro?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClearCart} color="primary" autoFocus>
            Sí, limpiar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
