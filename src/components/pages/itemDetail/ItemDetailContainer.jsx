import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../../../ProductsMock";

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    console.log("Selected Item ID:", id); // Verifica si el ID del producto se captura correctamente
    const item = products.find(product => product.id === id);
    setSelectedItem(item);
  }, [id]); 

  return (
    <div>
      {selectedItem && (
        <div>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <p>Precio: {selectedItem.price}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
