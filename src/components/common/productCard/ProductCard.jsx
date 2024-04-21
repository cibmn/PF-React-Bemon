import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({
  title,
  description,
  price,
  img,
  id,
  details,
  stock,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");

const handleIncrementQuantity = () => {
  const newQuantity = quantity + 1;
  if (newQuantity > stock) {
    setQuantity(stock);
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
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title={title} />
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
          Stock disponible: {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDecrementQuantity}>
          -
        </Button>
        <Typography variant="body2">{quantity}</Typography>
        <Button size="small" onClick={handleIncrementQuantity}>
          +
        </Button>
        <Button size="small" onClick={handleAddToCart} disabled={quantity <= 0}>
          AGREGAR AL CARRITO
        </Button>
        {error && <Typography variant="body2" color="error">{error}</Typography>}
        <Link to={`/itemDetail/${id}`}>
          <Button size="small">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
