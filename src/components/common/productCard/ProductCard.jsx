import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}.-
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Link to={`/itemDetail/${id}`}>
            <Button size="small" style={{ color: "#72995A" }}   >Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
