import React, { useEffect, useState } from 'react';
import ProductCard from "../../common/productCard/ProductCard";
import { Grid } from "@mui/material/";
import { useParams } from 'react-router-dom';

import { products } from "../../../ProductsMock";

const ItemListContainer = () => {
  const saludo = "Estás buscando el mat ideal? Prueba nuestra encuesta y encuéntralo!";
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
    const filtered = category ? products.filter(product => product.type === category) : products;
    setFilteredProducts(filtered);
  }, [category]); 

  return (
    <div>
      <p style={{ marginTop: "120px", textAlign: "center", fontSize: "1.5rem" }}>{saludo}</p>
      
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
              addToCart={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemListContainer;
