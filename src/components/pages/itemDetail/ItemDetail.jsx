import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../../ProductsMock.js";
import "./ItemDetailContainer.css";
import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetail = ({ onAdd }) => {
  const { id } = useParams();
  const foundItem = products.find((product) => product.id === parseInt(id));

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [limpiadorSeleccionado, setLimpiadorSeleccionado] = useState(false);
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const [tamañoSeleccionado, setTamañoSeleccionado] = useState("");

  if (!foundItem) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    if (cantidadSeleccionada < 1 || cantidadSeleccionada > foundItem.stock) {
      alert("Debes seleccionar una cantidad válida.");
      return;
    }

    const precioTotal = foundItem.price * cantidadSeleccionada;
    let total = precioTotal;

    // Objeto del producto principal seleccionado
    const productoPrincipal = {
      id: foundItem.id,
      title: foundItem.title,
      price: foundItem.price,
      quantity: cantidadSeleccionada,
      color: colorSeleccionado,
      size: tamañoSeleccionado
    };

    // Objeto del limpiador si está seleccionado
    const limpiador = limpiadorSeleccionado
      ? {
          id: "limpiador",
          title: "Limpiador de Mat y paño",
          price: 35000,
          quantity: 1
        }
      : null;

    // Agregar los productos al carrito
    onAdd([productoPrincipal, limpiador].filter(Boolean), total);
  };

  const handleAddSetCompleto = () => {
    setColorSeleccionado(foundItem.color[0]); // Seleccionar el primer color por defecto
    setTamañoSeleccionado(foundItem.size[0]); // Seleccionar el primer tamaño por defecto
    setLimpiadorSeleccionado(true); // Seleccionar el limpiador
    handleAddToCart(); // Agregar al carrito
  };

  return (
    <div className="item-detail-container">
      <div className="image-container">
        <img src={foundItem.image} alt={foundItem.title} />
      </div>
      <div className="details" style={{ paddingBottom: "60px" }}>
        <div className="warranty">Garantía de por vida</div>
        <h2>{foundItem.title}</h2>
        <h4>Precio: ${foundItem.price}</h4>
        <div className="rating">
          <span role="img" aria-label="star">
            ⭐⭐⭐⭐☆
          </span>
          <span> (639 votos)</span>
        </div>
        <div>
          <h3>Tipo: {foundItem.type}</h3>
          <p>{foundItem.description}</p>
        </div>
        <div className="colors" onClick={() => handleItemClick(foundItem.id)}>
          <h3>Colores disponibles: {foundItem.color.join(" - ")}</h3>
        </div>

        <div className="sizes" onClick={() => handleItemClick(foundItem.id)}>
          <h3>Tamaños disponibles: {foundItem.size.join(" - ")}</h3>
        </div>

        <div>
          <CounterContainer
            stock={foundItem.stock}
            onAdd={setCantidadSeleccionada}
          />
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
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
        <div className="shipping-info">
          <p>
            Envío gratis a partir de $70.000 y devolución gratis hasta tope 30
            días.
          </p>
        </div>
        <div className="add-all-to-cart" onClick={handleAddSetCompleto}>
          <button>Agregar set completo al carrito</button>
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
