import React, { useEffect, useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { Grid } from "@mui/material/";
import { useParams } from "react-router-dom";
import TopBar from "../../layout/topBar/TopBar";
import { products } from "../../../ProductsMock";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filtered = category
      ? products.filter((product) => product.type === category)
      : products;
    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        {filteredProducts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
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
        <Grid item xs={12} style={{ height: "100px" }}></Grid>
      </Grid>
      <div className="space-below-list"></div>
    </div>
  );
};

export default ItemListContainer;
