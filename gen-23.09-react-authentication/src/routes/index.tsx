import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/user/Home";
import ProductSearch from "../pages/user/ProductSearch";
import Cart from "../pages/user/Cart";
import ProductDetail from "../pages/user/ProductDetail";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Dashboard from "../pages/admin/Dashboard";
import EditProduct from "../pages/admin/EditProduct";
import AddProduct from "../pages/admin/AddProduct";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="/profile" element={<div>profile</div>} />
          <Route path="/wishlist" element={<div>wishlist</div>} />
          <Route path="/checkout" element={<div>checkout</div>} />
          <Route path="/order" element={<div>order</div>} /> */}
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products">
            <Route index element={<div> 404</div>} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="admin">
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="edit">
              <Route path="product/:productId" element={<EditProduct />} />
            </Route>
            <Route path="add">
              <Route path="product" element={<AddProduct />} />
            </Route>
          </Route>

          <Route
            path="*"
            element={
              <div className="m-auto flex min-h-screen w-20 items-center">
                404
              </div>
            }
          />
        </Route>
      </Routes>
    </Layout>
  );
};

export default AppRouter;
