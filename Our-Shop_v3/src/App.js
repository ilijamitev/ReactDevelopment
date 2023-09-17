import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";

import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/products";
import { Features } from "./components/features/Features";
import { Contact } from "./components/contact/Contact";
import { Login } from "./components/login/Login";
import { GlobalContextState } from "./store-context/globalContext";
import { WomanClothing } from "./components/products/per-category/WomanClothing";
import { MansClothing } from "./components/products/per-category/MansClothing";
import { Electronics } from "./components/products/per-category/Electronics";
import { Jewelery } from "./components/products/per-category/Jewelery";
import { SingleProduct } from "./components/products/single-product/SingleProduct";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Main>
          <Navbar />
          <GlobalContextState>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* localhost:3000/products */}
              <Route path="/products" element={<Products />}>
                <Route path="man-clothing" element={<MansClothing />} />
                <Route path="woman-clothing" element={<WomanClothing />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="jewelery" element={<Jewelery />} />
              </Route>
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </GlobalContextState>
        </Main>
      </Router>
    </>
  );
}

export default App;
