import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
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
    <div className="cart-container">
      <h1>Tu carrito</h1>

      {cart.length === 0 ? (
        <div className="ce center">
          <div className="ec">
            <h4 className="et">Agrega un producto...</h4>
            <a href="/" className="b" aria-label="/">
              Continuar comprando
            </a>
            <p className="lt h3">¿Ya tienes una cuenta?</p>
            <p className="lp">
              <a
                href="/account/login"
                className="l ul"
                aria-label="/account/login"
              >
                Inicia sesión
              </a>{" "}
              para un Checkout más rápido.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="cart-free-shipping">
            <p className="cart-free-shipping__text">
              {" "}
              +$70.000 para <b>Envío gratis</b>
            </p>
          </div>
          <div className="cart-message">
            <div className="rte">
              <p>
                Comprando un <a href="/category/newArrivals">mat</a> te llevás
                un 25% de descuento en cualquier{" "}
                <a href="/itemDetail/10">bag</a> o{" "}
                <a href="/itemDetail/9">towel</a>!
              </p>
            </div>
          </div>
          <div className="ciw">
            <table className="ci" role="table">
              <tbody role="rowgroup">
                {cart.map((product) => (
                  <tr key={product.id} className="ci" role="row">
                    <td className="cim" role="cell" headers="CD-CPI">
                      <a
                        href=" "
                        className="cil"
                        tabIndex="-1"
                        aria-hidden="true"
                      ></a>
                      <img
                        className="cii"
                        src={product.image}
                        loading="lazy"
                        width="150"
                        height="175"
                        style={{ margin: "20px" }}
                      />
                    </td>
                    <td className="cid" role="cell" headers="CD-CP">
                      <a href={product.id} className="cin hn b">
                        {product.title}
                      </a>
                      <dl className="details">
                        <div
                          className="product-option"
                          style={{ marginTop: "10px" }}
                        >
                          {product.description}
                        </div>
                        <div
                          className="product-option"
                          style={{ marginTop: "10px" }}
                        >
                          Color:{" "}
                          {Array.isArray(product.color)
                            ? product.color.join(" - ")
                            : product.color}
                        </div>
                        <div
                          className="product-option"
                          style={{ marginTop: "10px" }}
                        >
                          Tamaño: {product.size.join(" - ")}
                        </div>
                        <div
                          className="product-option"
                          style={{ marginTop: "10px", marginBottom: "10px" }}
                        >
                          Precio por unidad: ${product.price}.- x{" "}
                          {product.quantity} unidades
                          <div>
                            <Button
                              variant="outlined"
                              size="small"
                              color="error"
                              style={{ marginTop: "8px" }}
                              onClick={() => deleteById(product.id)}
                            >
                              Quitar
                            </Button>
                          </div>
                        </div>
                      </dl>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Button
            onClick={handleClearCartConfirmation}
            variant="outlined"
            style={{ margin: "10px" }}
          >
            Limpiar carrito
          </Button>

          <div className="cart-total" style={{ margin: "10px" }}>
            <h2>Subtotal: ${getTotalPrice()}</h2>
            <p>Los impuestos de importación se calcularán en el Checkout</p>
          </div>

          <div className="cart-confirm-button" style={{ margin: "10px" }}>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  width: "100%",
                }}
                size="large"
              >
                Confirmar e ir al checkout
              </Button>
            </Link>
          </div>
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>¿Seguro quieres limpiar el carrito?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Esta acción limpiará todos los productos del carrito. ¿Estás seguro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClearCart} color="primary" autoFocus>
            Sí, limpiar carrito
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
