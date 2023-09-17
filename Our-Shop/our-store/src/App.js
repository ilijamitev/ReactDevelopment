import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";

import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/products";
import { Features } from "./components/features/Features";
import { Contact } from "./components/contact/Contact";
import { Login } from "./components/login/Login";
import { GlobalContextState } from "./store-context/globalContext";

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
              <Route path="/products" element={<Products />} />
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
