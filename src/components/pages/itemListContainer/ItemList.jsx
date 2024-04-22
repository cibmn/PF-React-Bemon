import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <div style={{ paddingTop: "15px" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "0" }} // Aplicamos estilo directamente al Grid
      >
        {items.map(({ id, title, description, price, image }) => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              title={title}
              description={description}
              price={price}
              img={image}
              id={id}
              style={{ marginTop: "0" }} // Aplicamos estilo directamente a la ProductCard
            />
          </Grid>
        ))}
        {error && (
          <Grid item xs={12}>
            <h2>{error.message}</h2>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ItemList;
