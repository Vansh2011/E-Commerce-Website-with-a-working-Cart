import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Plppage from "./components/Plp/Plppage";
import Fullpage from "./components/fullpage/Fullpage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Plppage />} />
        <Route path="/product/:id" element={<Fullpage />} />
      </Routes>
    </div>
  );
}

export default App;
