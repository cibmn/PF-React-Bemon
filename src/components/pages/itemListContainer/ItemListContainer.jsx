import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="itemListContainer">
      <div className="productCards">
        <ProductCard
          precio={200}
          titulo={"Mat Eco"}
          descripcion={"100% reciclable - duración de por vida"}
        />
        <ProductCard
          precio={300}
          titulo={"Mat Pro"}
          descripcion={"Espesor ideal y excelente grip"}
        />
        <ProductCard
          precio={400}
          titulo={"Mat Pro Lite"}
          descripcion={"Excelente combinación entre los Mats Eco y Pro"}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
