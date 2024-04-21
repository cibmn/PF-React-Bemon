import React, { useEffect, useState } from 'react';
import { products } from "../../../ProductsMock";
import ItemList from '../itemListContainer/ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { name } = useParams(); // Capturamos el parámetro de la URL
  const [items, setItems] = useState([]); // Estado para almacenar los productos
  const [error, setError] = useState(null); // Estado para almacenar errores

  useEffect(() => {
    let productsFiltered = products; // Inicialmente, mostramos todos los productos

    // Si hay un parámetro de categoría en la URL, filtramos los productos por esa categoría
    if (name) {
      productsFiltered = products.filter(product => product.category === name);
    }

    // Simulamos una promesa para obtener los productos
    const getProducts = new Promise((resolve, reject) => {
      // Simulamos una condición de autorización
      const authorized = true; // Cambia esto según tus necesidades de autorización
      if (authorized) {
        resolve(productsFiltered); // Resolvemos la promesa con los productos filtrados
      } else {
        reject({ status: 403, message: "No estás autorizado para ver estos productos" });
      }
    });

    // Ejecutamos la promesa para obtener los productos
    getProducts
      .then(res => setItems(res))
      .catch(error => setError(error));
  }, [name]); // Ejecutamos el efecto cada vez que cambie el parámetro "name"

  return <ItemList items={items} error={error} />; // Renderizamos el componente ItemList
};

export default ItemListContainer;