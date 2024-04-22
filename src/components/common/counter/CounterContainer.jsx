import React, { useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { Grid, Button } from "@mui/material/";
import { Link } from "react-router-dom";
import { products } from "../../../ProductsMock";

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log(products); // Verifica si los productos se cargan correctamente
    setFilteredProducts(products);
  }, []);

  const handleAddToCart = (productId, quantity) => {
    // lógica para agregar el producto al carrito
    console.log(`Agregando ${quantity} unidades del producto con ID ${productId} al carrito.`);
  };

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
              addToCart={handleAddToCart} 
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemListContainer;
