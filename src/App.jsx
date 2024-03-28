import { useState } from "react";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  // Definir el mensaje de saludo
  const saludo = "¡Hola! Bienvenido a nuestra tienda de yoga.";

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
      <Footer />
    </div>
  );
}

export default App;
