import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import AllProducts from "./pages/Products/AllProducts";
import AddProduct from "./pages/Products/AddProduct/index";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app_body bg-gray-100 overflow-y-scroll">
        <Header />
        <Switch>
          <Route path="/products/add_product" component={AddProduct} />
          <Route path="/products" component={AllProducts} />
          <Route path="/" component={DashBoard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
