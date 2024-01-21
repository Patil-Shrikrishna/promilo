import "./App.css";
import About from "./pages/About/About";
import LogIn from "./pages/LogIn/LogIn";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
