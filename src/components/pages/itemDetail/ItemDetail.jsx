const ItemDetail = ({ item }) => {
  console.log("Detalles del producto:", item);

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
    </div>
  );
};
