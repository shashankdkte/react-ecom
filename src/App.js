import HomePage from "./pages/homepage.component";
import { Route, Routes } from "react-router-dom";
import Hats from "./hats.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
