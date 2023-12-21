import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import AdminRoutes from "./PrivateRoutes/AdminRoutes";
import GuestRoutes from "./PrivateRoutes/GuestRoutes";
import UserRoutes from "./PrivateRoutes/UserRoutes";
import {
  Cart,
  Checkout,
  Home,
  Login,
  ProductDetail,
  ProductSearch,
  Register,
  TransactionHistory,
} from "../pages/user";
import {
  AddProduct,
  Dashboard,
  EditProduct,
  ProductList,
  TransactionList,
} from "../pages/admin";

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

          <Route element={<UserRoutes />}>
            <Route path="/profile" element={<div>profile</div>} />
            <Route path="/wishlist" element={<div>wishlist</div>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<TransactionHistory />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route element={<GuestRoutes />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/search" element={<ProductSearch />} />
          <Route path="/products">
            <Route index element={<div> 404</div>} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>

          <Route path="admin" element={<AdminRoutes />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route path="product" element={<ProductList />} />
              <Route path="transaction" element={<TransactionList />} />
            </Route>
            <Route path="edit">
              <Route path="product/:productId" element={<EditProduct />} />
            </Route>
            <Route path="add">
              <Route path="product" element={<AddProduct />} />
            </Route>
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default AppRouter;
