import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
      <Grid container spacing={2} justifyContent="center">
        {items.map(({ id, title, description, price, image, stock }) => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              title={title}
              description={description}
              price={price}
              img={image}
              id={id}
              stock={stock} 
            />
          </Grid>
        ))}
        {error && (
          <Grid item xs={12}>
            <h2>{error.message}</h2>
          </Grid>
        )}
      </Grid>
      <div style={{ marginBottom: '100px' }}></div> 
    </div>
  );
};

export default ItemList;
