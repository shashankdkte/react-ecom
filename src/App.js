import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Hats from "./hats.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import "./App.css";
import "./A.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/signIn" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
