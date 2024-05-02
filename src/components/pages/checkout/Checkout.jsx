import { useState, useContext } from "react";
import { Button, TextField, Typography, Modal, Box } from "@mui/material";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [info, setInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Simulamos la actualización del stock aquí
      cart.forEach((product) => {
        console.log(`Actualizando stock para el producto ${product.id}`);
        // Aquí iría la lógica para actualizar el stock en la base de datos o en alguna estructura de datos simulada
      });

      setIsModalOpen(true);
      clearCart();
    } catch (error) {
      console.error("Error al actualizar el stock:", error);
    }
  };

  const handleCountdown = () => {
    if (countdown === 0) {
      setIsModalOpen(false);
      window.location.href = "/";
    } else {
      setTimeout(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
  };

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Compra exitosa!
      </Typography>
      <Typography>
        Por favor, introduzca los siguientes datos para acceder al código de seguimiento:
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px", display: "inline-block", maxWidth: "300px", margin: "auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            variant="outlined"
            type="text"
            label="Nombre"
            onChange={handleChange}
            name="nombre"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            variant="outlined"
            type="text"
            label="Teléfono"
            onChange={handleChange}
            name="telefono"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            onChange={handleChange}
            name="email"
            fullWidth
          />
        </div>
        <Button variant="contained" type="submit">Enviar</Button>
      </form>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom>Gracias por tu compra</Typography>
          <Typography variant="body1">Serás redirigido al inicio en {countdown} segundos.</Typography>
        </Box>
      </Modal>
      
      {isModalOpen && handleCountdown()}
    </div>
  );
};

export default Checkout;
