import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Community from "./components/pages/community/Community";
import More from "./components/pages/more/More";
import { Layout } from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:type" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/community" element={<Community />} />
            <Route path="/more" element={<More />} />
            <Route path="*" element={<h1>Error! La página no existe</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
