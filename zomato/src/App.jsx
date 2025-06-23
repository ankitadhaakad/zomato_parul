import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import NewSeller from "./newseller";
import Signup from "./signup";
function App() {
  return (
    <BrowserRouter>
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">🛍️ ZomatoMall</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/newseller" className="hover:underline">Add Seller</Link>
          <Link to="/signup" className="hover:underline">Login / Signup</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newseller" element={<NewSeller />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
