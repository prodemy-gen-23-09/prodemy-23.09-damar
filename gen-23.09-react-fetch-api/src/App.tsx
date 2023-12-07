import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductSearch from "./pages/ProductSearch";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="/profile" element={<div>profile</div>} />
          <Route path="/wishlist" element={<div>wishlist</div>} />
          <Route path="/cart" element={<div>cart</div>} />
          <Route path="/checkout" element={<div>checkout</div>} />
          <Route path="/order" element={<div>order</div>} /> */}
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/products">
            <Route index element={<div> 404</div>} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          {/* <Route path="/login" element={<div>login</div>} />
          <Route path="/register" element={<div>register</div>} /> */}
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
