import { useState, useEffect } from "react";
import { products } from "../../../ProductsMock.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

    setTimeout(() => {
      setItems(filteredProducts);
      setLoading(false);
    }, 200);
  }, [type]);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              {[...Array(4)].map((_, colIndex) => (
                <div key={colIndex}>
                  <Skeleton variant="rectangular" sx={{ fontSize: "1rem" }} height={200} width={280} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} height={40} width={280} />
                  <Skeleton variant="text" sx={{ fontSize: "0.5rem" }} height={20} width={100} />
                </div>
              ))}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            {[...Array(items.length % 4)].map((_, colIndex) => (
              <div key={colIndex}>
                <Skeleton variant="rectangular" sx={{ fontSize: "1rem" }} height={200} width={280} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} height={40} width={280} />
                <Skeleton variant="text" sx={{ fontSize: "0.5rem" }} height={20} width={100} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
