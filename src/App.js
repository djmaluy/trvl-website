import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
