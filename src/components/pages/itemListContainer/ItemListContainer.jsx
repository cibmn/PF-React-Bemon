import { useState, useEffect } from "react";
import { products } from "../../../ProductsMock.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { PiArrowSquareOutLight } from "react-icons/pi";


const ItemListContainer = () => {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let filteredProducts = [];

    if (type) {
      filteredProducts = products.filter((product) => {
        if (Array.isArray(product.type)) {
          return product.type.includes(type);
        } else {
          return product.type === type;
        }
      });
    } else {
      filteredProducts = products;
    }

    console.log(filteredProducts);

    setItems(filteredProducts);
  }, [type]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;

