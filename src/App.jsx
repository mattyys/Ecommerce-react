import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layouts/footer/Footer";
import { NavBar } from "./layouts/navBar/NavBar";
import { Products } from "./pages/products/Products";
import { Home } from "./pages/home/Home";
import { DetailProducts } from "./pages/detailProducts/DetailProducts";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element= {<Home />} />

        <Route path="/products" element={<Products />}>
             <Route path=":category" element={<Products />} />
        </Route >

        <Route path="/detail/:id" element={<DetailProducts />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
