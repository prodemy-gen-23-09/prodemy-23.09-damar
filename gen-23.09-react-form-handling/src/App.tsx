import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/user/Home";
import ProductDetail from "./pages/user/ProductDetail";
import ProductSearch from "./pages/user/ProductSearch";
import AddProduct from "./pages/admin/AddProduct";
import Dashboard from "./pages/admin/Dashboard";
import EditProduct from "./pages/admin/EditProduct";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="admin">
            <Route index element={<div>admin</div>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit/:productId" element={<EditProduct />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
