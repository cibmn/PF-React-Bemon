import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"; // Importamos ItemDetailContainer
import CartContainer from "./components/pages/cart/CartContainer";
import Mats from "./components/pages/mats/Mats";
import NewArrivals from "./components/pages/newArrivals/NewArrivals";
import PropsAccessories from "./components/pages/propsAccessories/PropsAccessories";
import Sale from "./components/pages/sale/Sale";
import Community from "./components/pages/community/Community";
import More from "./components/pages/more/More";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/mats" element={<Mats />} />
          <Route path="/newArrivals" element={<NewArrivals />} />
          <Route path="/propsAccessories" element={<PropsAccessories />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/community" element={<Community />} />
          <Route path="/more" element={<More />} />

          <Route path="*" element={<h1>Error! La página no existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
