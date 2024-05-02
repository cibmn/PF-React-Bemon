import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import "./Cart.css";


const Cart = ({ cart, clearCart, deleteById }) => {
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleCheckout = () => {
    // Lógica para iniciar el proceso de pago con el proveedor de pagos: PayPal o Mercado Pago
  };

  const handleOpenClearModal = () => {
    setIsClearModalOpen(true);
  };

  const handleCloseClearModal = () => {
    setIsClearModalOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
    handleCloseClearModal();
  };

  return (
    <div className="cart">
      <h1>¡Tu carrito de compras!</h1>

      {/* Lista de productos en el carrito */}

      <h2>Total: {getTotalPrice()}</h2>

      <Button onClick={handleOpenClearModal} variant="outlined">
        Limpiar carrito
      </Button>

      <Link to="/checkout">
        <Button onClick={handleCheckout} variant="contained">
          Finalizar compra
        </Button>
      </Link>

      <Dialog open={isClearModalOpen} onClose={handleCloseClearModal}>
        <DialogTitle>Limpiar carrito</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas limpiar el carrito?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClearModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClearCart} color="primary" autoFocus>
            Limpiar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
