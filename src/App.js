import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Hats from "./hats.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";
import "./A.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
