
const ProductDetails = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>Tipo: {item.type}</p>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
    </div>
  );
};

export default ProductDetails;
