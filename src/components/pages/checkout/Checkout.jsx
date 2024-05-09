import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EmailIcon from "@mui/icons-material/Email";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../context/firebaseConfig";
import "./Checkout.css";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    dni: "",
    address: "",
    location: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: getTotalPrice(),
    };

    try {
      const ordersCollection = collection(db, "orders");
      const res = await addDoc(ordersCollection, obj);
      setOrderId(res.id);

      await Promise.all(
        cart.map(async (product) => {
          const refDoc = doc(db, "products", product.id);
          await updateDoc(refDoc, { stock: product.stock - product.quantity });
        })
      );

      clearCart();
      setOpen(true);
    } catch (error) {}
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <h2>VER DETALLE DE MI COMPRA</h2>
            <div className="cart-total" style={{ margin: "10px" }}>
              <p>
                Total final: ${getTotalPrice()} + Envío: $5.000 nacional.
                (Consulte por envío internacional){" "}
              </p>
            </div>
            <div className="follow" style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "slategray" }}>
                Código de seguimiento: {orderId}
              </h2>
            </div>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <p>El pago fue confirmado, ya estamos preparando el pedido.</p>
            <p>
              <LocalShippingIcon /> Llega entre el 10 de junio y el 15 de junio.
              Destino: dirección 1234
            </p>
          </div>

          <div className="status-chart">
            <div className="status-items">
              <div className="status-item active">
                <h2>Pedido Realizado</h2>
                <p>¡Gracias por tu compra!</p>
                <ul style={{ listStyleType: "none", padding: 0, margin: 8 }}>
                  <li>
                    <h4>Pedido realizado</h4>
                    <p>11 de junio de 2024</p>
                  </li>
                  <li>
                    <h4>Pago confirmado</h4>
                    <p>12 de junio de 2024</p>
                  </li>
                </ul>
              </div>
              <div className="status-item">
                <h3>El vendedor está preparando tu producto</h3>
                <p>Estamos preparando tu pedido para el envío.</p>
              </div>
              <div className="status-item">
                <h3>Compra Despachada</h3>
                <p>Tu compra ha sido despachada y está en camino.</p>
              </div>
              <div className="status-item">
                <h3>En Envío a tu Domicilio</h3>
                <p>Tu pedido está en camino a tu domicilio.</p>
              </div>
              <div className="status-item">
                <h3>¡Recibiste tu Compra!</h3>
                <p>¡Felicidades! Tu compra ha sido entregada.</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "20px", fontSize: "18px" }}>
            <EmailIcon /> Cómo seguir el pedido?
            <p>
              Te enviamos un email con un link a esta página, para que puedas
              seguir la entrega de tu compra.
            </p>
            <ShoppingBagIcon /> Información del pedido
            <p>
              Datos ingresados previamente en el Checkout: Información del
              cliente, detalles de envío, detalles de pago
            </p>
          </div>
          <div className="ec">
            <h4 className="et">Comunicate con nosotros</h4>
            <a href="/" className="b">
              Seguir comprando
            </a>
          </div>
        </div>
      ) : (
        <div>
          <p className="checkout-info">
            Al ser tu primera compra, crea una cuenta para confirmar la compra.
          </p>
          <p
            className="checkout-info"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "15px",
            }}
          >
            Por favor, ingresa estos datos:
          </p>
          <form onSubmit={handleSubmit} className="checkout-form">
            <TextField
              required
              id="standard-required1"
              label="Nombre"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
              name="name"
              autoComplete="given-name"
            />
            <TextField
              required
              id="standard-required2"
              label="Apellido"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
              name="lastName"
              autoComplete="family-name"
            />
            <TextField
              required
              id="standard-required3"
              label="DNI"
              type="text"
              variant="standard"
              onChange={handleChange}
              name="dni"
              autoComplete="national-id"
            />
            <TextField
              required
              id="standard-required4"
              label="Dirección"
              type="text"
              variant="standard"
              onChange={handleChange}
              name="address"
              autoComplete="street-address"
            />
            <TextField
              required
              id="standard-required5"
              label="Ubicación"
              type="text"
              variant="standard"
              onChange={handleChange}
              name="location"
              autoComplete="address-level2"
            />
            <TextField
              required
              id="standard-required6"
              label="Email"
              type="email"
              variant="standard"
              onChange={handleChange}
              name="email"
              autoComplete="email"
            />
            <TextField
              required
              id="standard-required7"
              label="Teléfono"
              type="tel"
              variant="standard"
              onChange={handleChange}
              name="phone"
              autoComplete="tel"
            />
            <div className="checkout-button">
              <Button
                variant="contained"
                type="submit"
                className="checkout-button"
                style={{ backgroundColor: "green", color: "white" }}
              >
                enviar
              </Button>
            </div>
          </form>
        </div>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ backgroundColor: "#ffab40", color: "#ffffff" }}>
          ¡COMPRA CONFIRMADA!
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#ffffe0" }}>
          <DialogContentText style={{ color: "#333333", marginTop: "15px" }}>
            ¡Felicidades! Tu compra ha sido confirmada. A continuación, te
            daremos un código de seguimiento para que estés al día con los
            estados de tu compra.
          </DialogContentText>
          <DialogContentText
            style={{ color: "#ff9999", marginTop: "40px", textAlign: "center" }}
          >
            Si no realizaste esta compra o deseas cancelarla, ponte en contacto
            con nosotros lo antes posible.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#ffffe0" }}>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
