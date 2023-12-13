import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
