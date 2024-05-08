import { useContext } from "react";
import React, { useState } from "react"; 
import { CartContext } from "../../../context/CartContext";
import CounterContainer from "../../common/counter/CounterContainer";
import Button from "@mui/material/Button"; 
import "./ItemDetailContainer.css";

const ItemDetail = ({ item, initial }) => {
  const { addToCart } = useContext(CartContext);
  const [limpiadorSeleccionado, setLimpiadorSeleccionado] = useState(false);


  const handleAddToCart = (quantity) => {
    let precioTotal = item.price; 

    if (limpiadorSeleccionado) {
      precioTotal += 35000; 
    }

    addToCart({ ...item, quantity, precio: precioTotal });
  };
  return (
    <div className="containerItemDetail">
      <div className="leftColumn">
        <div className="containerImage" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={item.image} alt="" />
        </div>
      </div>
      <div className="rightColumn">
        <div className="details">
          <div className="warranty">Garantía de por vida</div>
          <div className="rating">
            <span role="img" aria-label="star">
              ⭐⭐⭐⭐☆
            </span>
            <span> (639 votos)</span>
          </div>
          <h1>{item.title}</h1>
          <p>Descripción: {item.description}</p>
          <h2>Precio: ${item.price}.-</h2>
          <div className="colors">
            <h3 className="inline-title">Color:</h3>
            <ul className="inline-list">
              {Array.isArray(item.color) ? (
                item.color.map((color, index) => (
                  <li key={index}>
                    {index > 0 ? " - " : ""}
                    {color}
                  </li>
                ))
              ) : (
                <li>{item.color}</li>
              )}
            </ul>
          </div>

          <div className="sizes">
            <h3 className="inline-title">Tamaño:</h3>
            <ul className="inline-list">
              {Array.isArray(item.size) ? (
                item.size.map((size, index) => (
                  <li key={index}>
                    {index > 0 ? " - " : ""}
                    {size}
                  </li>
                ))
              ) : (
                <li>{item.size}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="addons">
          <label htmlFor="limpiadorCheckbox">
            ¿Quieres agregar Limpiador de Mat y paño? +$35.000
          </label>
          <input
            type="checkbox"
            id="limpiadorCheckbox"
            style={{ marginLeft: "10px", width: "20px" }}
            onChange={(e) => setLimpiadorSeleccionado(e.target.checked)}
          />
        </div>
        <div className="add-to-cart">
          <CounterContainer
            stock={item.stock}
            onAdd={handleAddToCart}
            initial={initial}
          />
          <div className="shipping-info">
            <p>
              Envío gratis a partir de $70.000 y devolución gratis hasta tope 30
              días.
            </p>
          </div>
        </div>
        <div className="add-to-cart">
          <Button variant="contained" size="small" onClick={handleAddToCart}>Agregar SET COMPLETO</Button> {/* Usamos el componente Button de Material-UI */}
        </div>
        <div className="additional-sections">
          <h3>Generalidades +</h3>
          <p>Texto desplegable de generalidades</p>
          <h3>Especificaciones+</h3>
          <p>Texto desplegable de especificaciones</p>
          <h3>Usos & Cuidados +</h3>
          <p>Texto desplegable de usos y cuidados</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
