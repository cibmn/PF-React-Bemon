import { Button, TextField } from "@mui/material";
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
  console.log(cart);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.log(error));

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <h2>VER DETALLE DE MI COMPRA</h2>
            <p>total final: $1234567</p>
          </div>
          <div style={{ marginBottom: "20px", fontSize: "18px" }}>
            <h2 style={{ fontSize: "18px" }}>
              Código de seguimiento: {orderId}
            </h2>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p>El pago fue confirmado, ya estamos preparando el pedido.</p>
            <p>
              <LocalShippingIcon /> Llega entre el 10 de junio y el 15 de junio.
              Destino: dirección 1234
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h2>Pedido realizado</h2>
            <p>11 de junio de 2024</p>
            <h2>Pago confirmado</h2>
            <p>12 de junio de 2024</p>
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
            <a href="/" className="b" >
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
              variant="outlined"
              type="text"
              label="Nombre"
              onChange={handleChange}
              name="name"
              className="checkout-input"
              style={{ marginBottom: "10px" }}
            />
            <TextField
              variant="outlined"
              type="text"
              label="Telefono"
              onChange={handleChange}
              name="phone"
              className="checkout-input"
              style={{ marginBottom: "10px" }}
            />
            <TextField
              variant="outlined"
              type="text"
              label="Email"
              onChange={handleChange}
              name="email"
              className="checkout-input"
              style={{ marginBottom: "20px" }}
            />
            <Button
              variant="contained"
              type="submit"
              className="checkout-button"
              style={{ backgroundColor: "green", color: "white" }}
            >
              enviar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
