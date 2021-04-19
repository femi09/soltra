import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app_body bg-gray-100 bg-opacity-50 overflow-y-scroll">
        <Header />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={DashBoard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
