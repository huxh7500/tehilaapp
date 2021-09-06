import React from "react";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/product/:id"  component={ProductScreen}/>
          <Route path="/cart/:id?"  component={CartScreen}/>
          <Route path="/login"  component={LoginScreen}/>
          <Route path="/register"  component={RegisterScreen}/>
          <Route path="/profile"  component={ProfileScreen}/>
          <Route path="/shipping"  component={ShippingScreen}/>
          <Route path="/payment"  component={PaymentScreen}/>
          <Route path="/placeorder"  component={PlaceOrderScreen}/>
          <Route path="/" exact component={HomeScreen}/>
      </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;