import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <Grid container style={{ marginTop: "120px" }} spacing={2} justifyContent="center">
      {items.map(({ id, title, description, price, image }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            title={title}
            description={description}
            price={price}
            img={image}
            id={id}
          />
        </Grid>
      ))}
      {error && (
        <Grid item xs={12}>
          <h2>{error.message}</h2>
        </Grid>
      )}
    </Grid>
  );
};

export default ItemList;
