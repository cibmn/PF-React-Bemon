import React, { useEffect, useState } from 'react';
import ProductCard from "../../common/productCard/ProductCard";
import { Grid } from "@mui/material/";
import { products } from "../../../ProductsMock";

const NewArrivals = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(product => product.type.includes("new arrivals"));
    setFilteredProducts(filtered);
  }, []);

  return (
    <div style={{ marginTop: "15px" }}>
      <h1>New Arrivals</h1>
      <Grid container justifyContent="center" spacing={2}>
        {filteredProducts.map(product => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.image}
              id={product.id}
              stock={product.stock}
              addToCart={() => {}} // Para implementar más adelante
            />
          </Grid>
        ))}
      </Grid>
      <div style={{ marginBottom: '100px' }}></div>
    </div>
  );
};

export default NewArrivals;
