import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductSearch from "./pages/ProductSearch";

function App() {
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  );
}

export default App;
