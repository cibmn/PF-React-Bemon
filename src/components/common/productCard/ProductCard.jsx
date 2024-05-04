import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext"; 
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ id, title, description, price, img, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleIncrementQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity > stock) {
      setError("No hay suficiente stock disponible");
    } else {
      setQuantity(newQuantity);
      setError("");
    }
  };

  const handleDecrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setError("");
    }
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      setError("Por favor selecciona al menos 1 cantidad.");
    } else if (quantity > stock) {
      setError("No hay suficiente stock disponible");
    } else {
      addToCart({ id, title, price, quantity });
      setQuantity(0);
      setError("");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: 360 }}>
        <CardMedia sx={{ height: 300 }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price} .-
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Disponibles: {stock}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-start" }}>
          <Link to={`/itemDetail/${id}`}>
            <Button size="small">Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
