import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
import {Grid} from '@mui/material/';


const ItemListContainer = () => {
  return (

    <div>
      <Grid container justifyContent="center" gap={5}>
        <Grid item style={{ background: "linearGradient(to top, white, #cccccc)", height:"250px", marginTop:"200px", padding:"30px"}} xs={12} ms={6} md={3}>
        <img className="logo" src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711138602/111011460-Mats-PRO71-Elderberry-04_adfxhs.jpg" href="#" />
        <ProductCard
          precio={200}
          titulo={"Mat Eco"}
          descripcion={"100% reciclable - duración de por vida"}
        />
        </Grid>
        <Grid item style={{ background: "linearGradient(to top, white, #cccccc)", height:"250px", marginTop:"200px", padding:"30px"}} xs={12} ms={6} md={3}>
        <img className="logo" src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711138612/811ym9UqPOL._AC_UF1000_1000_QL80__vlwc7s.jpg" href="#" />
        <ProductCard
          precio={300}
          titulo={"Mat Pro Lite"}
          descripcion={"Espesor ideal y excelente grip"}
        />
        </Grid>
        <Grid item style={{ background: "linearGradient(to top, white, #cccccc)", height:"250px", marginTop:"200px", padding:"30px"}} xs={12} ms={6} md={3}>
        <img className="logo" src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711138625/2132md-pro-71-111011010-mats-black_041-2f0c2e0518e2b820be16312784639854-640-0_cvjhq5.jpg" href="#" />
        <ProductCard
          precio={400}
          titulo={"Mat Pro"}
          descripcion={"Excelente combinación entre los Mats Eco y Pro"}
        />
        </Grid>
      </Grid>
    </div>

  );
};

export default ItemListContainer;

