import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./Cart.css";

const Cart = ({ cart, clearCart, deleteById }) => {
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);
  const [quantities, setQuantities] = useState({}); // Definir quantities aquí

  const handleDecrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrementQuantity = (productId, stock) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.min((prevQuantities[productId] || 0) + 1, stock),
    }));
  };

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
      {cart.length === 0 ? (
        <div className="cart-drawer__warnings center">
          <div className="cart-drawer__empty-content">
            <h2 className="cart__empty-text">Tu carrito está vacío</h2>
            <a href="/" className="button">
              Continuar comprando
            </a>
            <p className="cart__login-title h3">¿Tienes una cuenta?</p>
            <p className="cart__login-paragraph">
              <a href="/account/login" className="link underlined-link">
                Inicia sesión
              </a>{" "}
              para finalizar la compra más rápido.
            </p>
          </div>
        </div>
      ) : (
        <div className="cart__contents cart-drawer__form">
          <div className="drawer__contents js-contents">
            <div key="items-drawer" className="drawer__cart-items-wrapper">
              <h2>Carrito de compras</h2>
              {cart.map((item) => (
                <div key={item.id}>           
                  <h3>{item.title}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  {item.color && <p>Color: {item.color}</p>}
                  {item.size && <p>Tamaño: {item.size}</p>}
                  <div className="cart-item__quantity">
                    <Button
                      size="small"
                      sx={{ marginRight: "4px", minWidth: "auto" }}
                      onClick={() => handleDecrementQuantity(item.id)}
                    >
                      -
                    </Button>
                    <Typography variant="body2" sx={{ marginRight: "4px" }}>
                      {quantities[item.id] || 0}
                    </Typography>
                    <Button
                      key="quantity"
                      size="small"
                      sx={{ minWidth: "auto" }}
                      onClick={() =>
                        handleIncrementQuantity(item.id, item.stock)
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
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
        </div>
      )}
    </div>
  );
};

export default Cart;
