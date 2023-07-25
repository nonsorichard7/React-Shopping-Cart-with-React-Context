import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
