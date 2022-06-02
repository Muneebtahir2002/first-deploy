import { Login } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import TopMenu from "./components/TopMenu";
import NewProduct from "./Products/NewProduct";
import Products from "./Products/Products";
import LogIn from "./components/LogIn";
import { Switch } from "react-router-dom";
import UpdateProducts from "./Products/UpdateProducts";
import Register from "./components/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <ToastContainer />
      <TopMenu />
      <div style={{ padding: "10px" }}>
        <Switch>
          <Route path="/products/new" component={NewProduct} />
          <Route path="/products/update/:id" component={UpdateProducts} />
          <Route path="/products/:page?" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/register" component={Register} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
